export type TAyah = {
  number: number;
  arabic: string;
  translation: string;
  audio?: string;
};

export type TSurah = {
  number: number; 
  nameArabic: string;
  nameEnglish: string;
  revelationType: 'Meccan' | 'Medinan';
  totalAyahs: number;
  ayahs: TAyah[];
};