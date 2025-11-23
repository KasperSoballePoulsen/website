export interface NavItem {
  label: string;
  href: string;
}

export interface Insight {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  iconName: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}