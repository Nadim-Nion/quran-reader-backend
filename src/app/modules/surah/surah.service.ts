import type { TSurah } from './surah.interface';
import { Surah } from './surah.model';

const createSurahIntoDB = async (payload: TSurah) => {
  const result = await Surah.create(payload);
  return result;
};

const getAllSurahsFromDB = async () => {
  const result = await Surah.find().select(
    'number nameArabic nameEnglish revelationType totalAyahs'
  );
  return result;
};

const getSingleSurahFromDB = async (number: number) => {
  const result = await Surah.findOne({ number });
  return result;
};

const searchSurahsFromDB = async (query: string) => {
  const result = await Surah.find({
    $or: [
      { nameEnglish: { $regex: query, $options: 'i' } },
      { nameArabic: { $regex: query, $options: 'i' } },
      { 'ayahs.translation': { $regex: query, $options: 'i' } },
      { 'ayahs.arabic': { $regex: query, $options: 'i' } },
    ],
  });

  return result;
};

export const SurahServices = {
  createSurahIntoDB,
  getAllSurahsFromDB,
  getSingleSurahFromDB,
  searchSurahsFromDB,
};