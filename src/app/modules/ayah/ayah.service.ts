import type { TAyah } from './ayah.interface';
import { Ayah } from './ayah.model';

const createAyahIntoDB = async (payload: TAyah) => {
  return await Ayah.create(payload);
};

const getAyahsBySurahFromDB = async (surahNumber: number) => {
  return await Ayah.find({ surahNumber }).sort({ ayahNumber: 1 });
};

const getSingleAyahFromDB = async (globalNumber: number) => {
  return await Ayah.findOne({ globalNumber });
};

const searchAyahsFromDB = async (query: string) => {
  return await Ayah.find({
    $text: { $search: query },
  }).limit(50);
};

const getPaginatedAyahsFromDB = async (
  page: number,
  limit: number
) => {
  const skip = (page - 1) * limit;

  const result = await Ayah.find()
    .skip(skip)
    .limit(limit)
    .sort({ globalNumber: 1 });

  const total = await Ayah.countDocuments();

  return {
    meta: { page, limit, total },
    data: result,
  };
};

export const AyahServices = {
  createAyahIntoDB,
  getAyahsBySurahFromDB,
  getSingleAyahFromDB,
  searchAyahsFromDB,
  getPaginatedAyahsFromDB,
};