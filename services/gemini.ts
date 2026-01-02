
import { GoogleGenAI, Type } from "@google/genai";

export const getGeminiResponse = async (userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an AI Assistant for DuraCore. A customer is asking: "${userQuery}". 
      Respond as a professional consultant. 
      Mention our use of Action TESA boards and high-quality hardware. 
      Recommend either HPL, Compact Laminate, or Board-based partitions based on their query.
      Keep it concise (max 100 words).`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I'm having trouble processing that right now. Please call our support at +91-9876543210.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI consultant is currently offline. Please use the contact form below.";
  }
};
