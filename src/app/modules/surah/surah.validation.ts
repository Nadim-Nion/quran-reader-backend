import { z } from 'zod';

const ayahValidationSchema = z.object({
  number: z
    .number({ error: 'Ayah number is required' })
    .int('Ayah number must be an integer')
    .positive('Ayah number must be positive'),

  arabic: z
    .string({ error: 'Arabic text is required' })
    .min(1, 'Arabic text cannot be empty'),

  translation: z
    .string({ error: 'Translation is required' })
    .min(1, 'Translation cannot be empty'),

  audio: z.string().url('Audio must be a valid URL').optional(),
});

const createSurahValidationSchema = z.object({
  body: z.object({
    number: z
      .number({ error: 'Surah number is required' })
      .int('Surah number must be an integer')
      .min(1, 'Surah number must be at least 1')
      .max(114, 'Surah number cannot exceed 114'),

    nameArabic: z
      .string({ error: 'Arabic name is required' })
      .min(1, 'Arabic name cannot be empty'),

    nameEnglish: z
      .string({ error: 'English name is required' })
      .min(1, 'English name cannot be empty'),

    revelationType: z.enum(['Meccan', 'Medinan'], {
      error: 'Revelation type is required',
      message: "Revelation type must be either 'Meccan' or 'Medinan'",
    }),

    totalAyahs: z
      .number({ error: 'Total ayahs count is required' })
      .int('Total ayahs must be an integer')
      .positive('Total ayahs must be a positive number'),

    ayahs: z
      .array(ayahValidationSchema, { error: 'Ayahs are required' })
      .min(1, 'Surah must contain at least one ayah'),
  }),
});

const updateSurahValidationSchema = z.object({
  body: z.object({
    number: z
      .number()
      .int('Surah number must be an integer')
      .min(1, 'Surah number must be at least 1')
      .max(114, 'Surah number cannot exceed 114')
      .optional(),

    nameArabic: z.string().min(1, 'Arabic name cannot be empty').optional(),

    nameEnglish: z.string().min(1, 'English name cannot be empty').optional(),

    revelationType: z.enum(['Meccan', 'Medinan']).optional(),

    totalAyahs: z
      .number()
      .int('Total ayahs must be an integer')
      .positive('Total ayahs must be a positive number')
      .optional(),

    ayahs: z.array(ayahValidationSchema).min(1).optional(),
  }),
});

export const SurahValidations = {
  createSurahValidationSchema,
  updateSurahValidationSchema,
};