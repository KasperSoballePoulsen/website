import { GoogleGenAI } from "@google/genai";

export const generateMarketInsight = async (topic: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a concise, professional market intelligence summary for the topic: "${topic}". 
      Focus on trends, talent implications, and commercial factors relevant to the energy trading sector.`,
    });
    
    return response.text || "No insights available.";
  } catch (error) {
    console.error("Error generating market insight:", error);
    throw error;
  }
};