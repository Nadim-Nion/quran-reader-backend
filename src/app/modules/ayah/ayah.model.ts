import { Schema, model } from 'mongoose';
import type { TAyah } from './ayah.interface';

const ayahSchema = new Schema<TAyah>(
  {
    surah: {
      type: Schema.Types.ObjectId,
      ref: 'Surah',
      required: true,
    },
    surahNumber: {
      type: Number,
      required: true,
      index: true,
    },
    ayahNumber: {
      type: Number,
      required: true,
    },
    globalNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    arabic: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


ayahSchema.index({ translation: 'text', arabic: 'text' });

export const Ayah = model<TAyah>('Ayah', ayahSchema);