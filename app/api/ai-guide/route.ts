import { NextRequest, NextResponse } from "next/server";
import { OPENROUTER_API_KEY } from "@/lib/openrouter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const prompt = `
You are an Indian Government Career Expert.

Suggest exactly 3 best government jobs.

Qualification: ${body.qualification}
Age: ${body.age}
Category: ${body.category}
State: ${body.state}
Interest: ${body.interest}

Return ONLY valid JSON.

Example:

[
  {
    "title":"SSC CGL",
    "salary":"₹44,900 - ₹1,42,400",
    "difficulty":"Medium",
    "preparation":"6-8 Months"
  }
]
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openrouter/auto",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      text: data.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "AI Error",
      },
      {
        status: 500,
      }
    );
  }
}