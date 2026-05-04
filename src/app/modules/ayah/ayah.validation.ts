import { z } from 'zod';

const createAyahValidationSchema = z.object({
  body: z.object({
    surah: z.string(),
    surahNumber: z.number().min(1).max(114),
    ayahNumber: z.number().min(1),
    globalNumber: z.number().min(1),

    arabic: z.string().min(1),
    translation: z.string().min(1),

    audio: z.string().optional(),
  }),
});

const searchAyahValidationSchema = z.object({
  query: z.object({
    q: z.string().min(1),
  }),
});

export const AyahValidations = {
  createAyahValidationSchema,
  searchAyahValidationSchema,
};
