
export interface NavLink {
  name: string;
  path: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Member {
  id: number;
  name: string;
  media: string;
  imageUrl: string;
  position: string;
}

export interface StrategicPartner {
  id: number;
  name: string;
  logoUrl: string;
  category: 'Pemerintahan' | 'BUMN' | 'Swasta';
}
