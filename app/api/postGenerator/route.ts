/* eslint-disable */

import { NextResponse } from "next/server";

export const runtime = "nodejs"; 

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "prompt is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY is missing on server" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "x-ai/grok-4.1-fast",
          messages: [
            {
              role: "system",
              content: "Use the templates: #1 AIDA → It’s impossible to [achieve common goal] on/in [platform] today, instead you can [action1] to get [result1], [action2] to get [result2], [action3] to get [result3] — try doing that today. • #2 Story → I grew up [starting situation], then decided to [action] without [advantage], step by step I [action1], [action2], [action3] and reached [result], showing where you start doesn’t define where you end. • #3 PAS → Are you struggling with [common problem]? many in [field] feel the same because [why], here are 3 simple steps: [solution1], [solution2], [solution3] — try them and you’ll see [benefit]. • #4 Don’t/Instead → Many do [wrong approach1/2/3] and it fails because [reason], instead do [better approach1], [better approach2], [better approach3] to get [positive outcome]. • #5 Tips → Want to get better at [goal]? here are [X] tips that helped me: [tip1], [tip2], [tip3], [tip4] — even using a few usually leads to results. • Use https://kleo.so/blog/linkedin-post-templates as reference. Choose only the best-fitting template for the subject. Write the final LinkedIn post in a humanized, natural tone, avoid emojis, use simple bullet points only, avoid the red-circle marker completely, write contractions naturally (it’s, I’m, they’re, I’ve), and output nothing except the final post itself. Make the post 400–500 words. you can't using dash(-). Do not include the word count at the end, and do not indicate that you wrote this."
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          extra_body: {
            reasoning: {
              enabled: true,
            },
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenRouter error:", data);
      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            data?.message ||
            "OpenRouter API error",
        },
        { status: response.status }
      );
    }

    let generated: any = data?.choices?.[0]?.message?.content;

    if (Array.isArray(generated)) {
      generated = generated
        .map((part: any) => part?.text || part?.content || "")
        .join("");
    }

    if (!generated || typeof generated !== "string") {
      generated = "";
    }

    return NextResponse.json({ postGenerator: generated });
  } catch (err: any) {
    console.error("Route /api/postGenerator error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
