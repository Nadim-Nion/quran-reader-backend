import { Types } from 'mongoose';

export type TAyah = {
  surah: Types.ObjectId;
  surahNumber: number;
  ayahNumber: number;
  globalNumber: number;

  arabic: string;
  translation: string;

  audio?: string;
};
