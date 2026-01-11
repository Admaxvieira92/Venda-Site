
import { GoogleGenAI, Type } from "@google/genai";
import { BriefingData, AIAnalysis } from "../types";

export const analyzeBriefing = async (data: BriefingData): Promise<AIAnalysis> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  // 1. Generate Text Analysis and Image Prompt
  const textPrompt = `
    Analise o seguinte briefing para criação de um site:
    - Método de Venda: ${data.sellingMethod}
    - Canal de Pagamento: ${data.paymentChannel}
    - Métodos: ${data.paymentMethods}
    - Logística: ${data.deliveryMethod}
    - Variações: ${data.productVariations}
    - Qtd Produtos: ${data.productQuantity}
    - Expectativas: ${data.expectations}
    - Estilo: ${data.visualStyle}

    Gere uma análise técnica detalhada em JSON. 
    Inclua um campo 'visualConceptPrompt' que seja um prompt em INGLÊS para gerar uma imagem 16:9 de um website moderno seguindo o estilo '${data.visualStyle}'.
  `;

  try {
    const textResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: textPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            projectComplexity: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] },
            suggestedFeatures: { type: Type.ARRAY, items: { type: Type.STRING } },
            styleAdvice: { type: Type.STRING },
            estimatedTimeline: { type: Type.STRING },
            nextSteps: { type: Type.STRING },
            visualConceptPrompt: { type: Type.STRING }
          },
          required: ['projectComplexity', 'suggestedFeatures', 'styleAdvice', 'estimatedTimeline', 'nextSteps', 'visualConceptPrompt']
        }
      }
    });

    const analysis: AIAnalysis = JSON.parse(textResponse.text || '{}');

    // 2. Generate Visual Concept Image
    try {
      const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `A high-end professional UI/UX landing page design for a website, style ${data.visualStyle}, showing a hero section with modern typography, ${analysis.visualConceptPrompt}. 8k resolution, cinematic lighting, sleek web design trend 2026.` }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      const imagePart = imageResponse.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (imagePart?.inlineData) {
        analysis.mockupImageUrl = `data:image/png;base64,${imagePart.inlineData.data}`;
      }
    } catch (imgError) {
      console.warn("Image generation failed, proceeding with text only", imgError);
    }

    return analysis;
  } catch (error) {
    console.error("Analysis Error:", error);
    return {
      projectComplexity: 'Medium',
      suggestedFeatures: ['Catálogo Inteligente', 'Checkout WhatsApp', 'Design Responsivo'],
      styleAdvice: 'O estilo selecionado é excelente para conversão no nicho atual.',
      estimatedTimeline: '12-18 dias',
      nextSteps: 'Nossa equipe entrará em contato para alinhar os detalhes finais.',
      visualConceptPrompt: ''
    };
  }
};
