export type SuiteTool = 'writer' | 'spreadsheet' | 'presentation' | 'pdf' | 'ai';

export interface FeatureItem {
  id: SuiteTool | string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  featuresList: string[];
}

export interface WorkflowStep {
  id: number;
  phase: string;
  tool: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export type AiActionType = 'rewrite' | 'summarize' | 'proofread' | 'generate_ideas' | 'analyze' | 'improve';

export interface AiPreset {
  id: AiActionType;
  label: string;
  icon: string;
  shortDesc: string;
  sampleText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: 'Student' | 'Freelancer' | 'Business Professional';
  avatarBg: string;
  initials: string;
  quote: string;
  highlight: string;
  metrics?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'features' | 'ai' | 'compatibility';
}

export type PlatformOs = 'windows' | 'mac' | 'ios' | 'android' | 'linux' | 'web';
