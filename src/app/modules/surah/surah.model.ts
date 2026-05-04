import { Schema, model } from 'mongoose';
import type { TSurah } from './surah.interface';
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

const ayahSchema = new Schema(
  {
    number: { type: Number, required: true },
    arabic: { type: String, required: true },
    translation: { type: String, required: true },
    audio: { type: String },
  },
  { _id: false }
);

const surahSchema = new Schema<TSurah>(
  {
    number: { type: Number, required: true, unique: true },
    nameArabic: { type: String, required: true },
    nameEnglish: { type: String, required: true },
    revelationType: {
      type: String,
      enum: ['Meccan', 'Medinan'],
      required: true,
    },
    totalAyahs: { type: Number, required: true },
    ayahs: { type: [ayahSchema], required: true },
  },
  {
    timestamps: true,
  }
);

export const Surah = model<TSurah>('Surah', surahSchema);