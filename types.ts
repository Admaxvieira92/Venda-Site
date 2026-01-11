
export interface BriefingData {
  sellingMethod: string;
  paymentChannel: string;
  paymentMethods: string;
  deliveryMethod: string;
  productVariations: string;
  productQuantity: string;
  expectations: string;
  visualStyle: string;
  contact: {
    name: string;
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

export interface AIAnalysis {
  projectComplexity: 'Low' | 'Medium' | 'High';
  suggestedFeatures: string[];
  styleAdvice: string;
  estimatedTimeline: string;
  nextSteps: string;
  visualConceptPrompt: string;
  mockupImageUrl?: string;
}
