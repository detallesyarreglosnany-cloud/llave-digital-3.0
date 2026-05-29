import { NextRequest, NextResponse } from "next/server";

// Google Sheets Web App URL (will be set up via Apps Script)
const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL || process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
// Mailchimp API config
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || "";
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || "";
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      country,
      phone,
      score,
      source,
      isHotLead,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const results: { sheets?: boolean; mailchimp?: boolean } = {};

    // Build Mailchimp tags based on lead quality and source
    const mailchimpTags = ["llave-digital-3.0", source || "quiz"];
    if (isHotLead) mailchimpTags.push("hot-lead");
    if (country) mailchimpTags.push(`pais-${country.toLowerCase()}`);

    // Send to Google Sheets (with all new fields)
    if (GOOGLE_SHEETS_URL) {
      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            country: country || "",
            phone: phone || "",
            score: score || "",
            source: source || "quiz",
            isHotLead: isHotLead ? "yes" : "no",
            utm_source: utm_source || "",
            utm_medium: utm_medium || "",
            utm_campaign: utm_campaign || "",
            utm_term: utm_term || "",
            utm_content: utm_content || "",
            date: new Date().toISOString(),
          }),
        });
        results.sheets = true;
      } catch {
        results.sheets = false;
      }
    }

    // Send to Mailchimp (with country, phone, UTM merge fields)
    if (MAILCHIMP_API_KEY && MAILCHIMP_SERVER_PREFIX && MAILCHIMP_LIST_ID) {
      try {
        const mailchimpRes = await fetch(
          `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            },
            body: JSON.stringify({
              email_address: email,
              status: "subscribed",
              merge_fields: {
                FNAME: name.split(" ")[0],
                LNAME: name.split(" ").slice(1).join(" ") || "",
                COUNTRY: country || "",
                PHONE: phone || "",
                SCORE: score ? String(score) : "",
              },
              tags: mailchimpTags,
            }),
          }
        );
        results.mailchimp = mailchimpRes.status < 400;
      } catch {
        results.mailchimp = false;
      }
    }

    return NextResponse.json({ success: true, results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
