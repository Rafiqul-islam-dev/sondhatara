
export interface Activity {
  id: number;
  title: string;
  description: string;
  year: string;
  impact: string;
  icon: string;
}

export interface ActivityHistoryItem {
  year: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

export interface ProgramDetail {
  id: string;
  name: string;
  bannerImage: string;
  intro: string;
  history: ActivityHistoryItem[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  designation?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

export interface GalleryFolder {
  id: number;
  name: string;
  coverImage: string;
  images: GalleryItem[];
}

export interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  description: string;
}
