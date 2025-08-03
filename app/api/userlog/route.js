import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

const formatTime = (isoTimeStr, timeZone = "Asia/Kolkata") => {
  const date = new Date(isoTimeStr);
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(date);
};

const generateVisitorEmail = (location) => {
  const {
    ip,
    city,
    region,
    country,
    postal,
    continent,
    latitude,
    longitude,
    timezone,
    connection,
    flag,
  } = location;
  const formattedTime = formatTime(timezone?.current_time, "Asia/Kolkata");

  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #007BFF;">New Visitor Detected On Your Website</h2>
      <p><strong>IP Address:</strong> ${ip}</p>
      <p><strong>Location:</strong> ${city}, ${region}, ${country}, ${postal}</p>
      <p><strong>Continent:</strong> ${continent}</p>
      <p><strong>Coordinates:</strong> ${latitude}, ${longitude}</p>
      <p><strong>Timezone:</strong> ${timezone?.id} (${timezone?.abbr})</p>
      <p><strong>Local Time:</strong> ${formatTime(
        timezone?.current_time,
        timezone?.id
      )}</p>
      <p><strong>Indian Time:</strong> ${formattedTime}</p>
      <p><strong>ISP:</strong> ${connection?.isp}</p>
      <p><strong>Organization:</strong> ${connection?.org}</p>
      <p><strong>Domain:</strong> ${connection?.domain}</p>
      <p><strong>ASN:</strong> ${connection?.asn}</p>
      <p><strong>Country Flag:</strong>${flag?.emoji}</p>
    </div>
  `;
};

export async function POST(request) {
  try {
    const { location } = await request.json();

    const mailOptions = {
      from: "Portfolio Visitor Logger",
      to: process.env.EMAIL_ADDRESS,
      subject: `New Visitor from ${location.city}, ${location.country}`,
      html: generateVisitorEmail(location),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Visitor tracking failed:", err);
    return NextResponse.json(
      { success: false, message: "Location fetch or email failed." },
      { status: 500 }
    );
  }
}