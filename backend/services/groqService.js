import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateRoutine = async (assessment) => {
  const prompt = `
You are an expert dermatologist.

Generate a personalized skincare routine.

Skin Type:
${assessment.skinType}

Skin Concerns:
${assessment.concerns.join(", ")}

Goals:
${assessment.goals.join(", ")}

Routine Preference:
${assessment.routinePreference}

Lifestyle:
- Water Intake: ${assessment.lifestyle.waterIntake}
- Sleep: ${assessment.lifestyle.sleep}
- Sunscreen: ${assessment.lifestyle.sunscreen}
- Stress Level: ${assessment.lifestyle.stressLevel}
- Exercise: ${assessment.lifestyle.exercise}

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT use markdown.
3. Do NOT wrap the response in \`\`\`.
4. Do NOT include explanations.
5. Every array must contain ONLY STRINGS.

Return EXACTLY this structure:

{
  "morningRoutine": [
    "string",
    "string",
    "string"
  ],
  "nightRoutine": [
    "string",
    "string",
    "string"
  ],
  "weeklyCare": [
    "string",
    "string"
  ],
  "recommendedIngredients": [
    "string",
    "string",
    "string"
  ],
  "lifestyleTips": [
    "string",
    "string",
    "string"
  ]
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  let text = completion.choices[0].message.content;

  text = text.replace(/```json/g, "");
  text = text.replace(/```/g, "");
  text = text.trim();

  const routine = JSON.parse(text);

  console.log("========== AI ROUTINE ==========");
  console.log(JSON.stringify(routine, null, 2));
  console.log("================================");

  return routine;
};
