import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, learning_interest } = await req.json();

    const adminEmail = "codenexis356@gmail.com";
    const studentMessage = `
      <h2>Welcome to CodeNexisTech!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for enrolling in our learning platform. We're excited to have you join our community!</p>
      <p><strong>Your Interest:</strong> ${learning_interest}</p>
      <p>Check out our latest videos and courses:</p>
      <p><a href="https://www.youtube.com/@CodeNexisTech" style="color: #3b82f6; text-decoration: none;">Visit our YouTube Channel</a></p>
      <p>Best regards,<br/>CodeNexisTech Team</p>
    `;

    const adminNotification = `
      <h2>New Enrollment - CodeNexisTech</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Learning Interest:</strong> ${learning_interest}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `;

    const studentResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@codenexistech.com",
        to: email,
        subject: "Welcome to CodeNexisTech - Let's Start Learning!",
        html: studentMessage,
      }),
    });

    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@codenexistech.com",
        to: adminEmail,
        subject: `New Enrollment: ${name}`,
        html: adminNotification,
      }),
    });

    if (!studentResponse.ok || !adminResponse.ok) {
      throw new Error("Failed to send emails");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails sent successfully",
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
