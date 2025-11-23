import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketInsight = async (topic: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a senior recruitment consultant at PrimeTalent, a boutique search firm specialized exclusively in Energy Trading, Commodities, and FinTech.
      
      Provide a sophisticated, data-driven market insight analysis regarding the following topic: "${topic}".
      
      Focus on roles such as Energy Traders (Power, Gas, Oil), Quantitative Analysts, Python/C++ Developers, and Risk Managers.
      Keep the tone professional, authoritative, and editorial (like a McKinsey or BCG report). 
      Structure the response with a clear headline, 3 key trends relevant to trading floors or energy markets, and a conclusion. 
      Limit the response to approx 300 words.
      Do not use markdown bolding too aggressively, keep it elegant.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Unable to generate insights at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to retrieve market intelligence.");
  }
};