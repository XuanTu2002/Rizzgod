import OpenAI from "openai";

// Debugging: Log the API key (Make sure NOT to commit this!)
console.log("DEBUG: OPENAI_API_KEY:", process.env.OPENAI_API_KEY ? "Loaded ✅" : "❌ MISSING");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is correctly loaded
});

export async function generateResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I couldn't think of anything witty to say.";
  }
}
