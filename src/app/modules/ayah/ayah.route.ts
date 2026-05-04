import express from 'express';
import { AyahControllers } from './ayah.controller';
import { AyahValidations } from './ayah.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

// Search (IMPORTANT: keep before dynamic routes)
router.get(
  '/search',
  validateRequest(AyahValidations.searchAyahValidationSchema),
  AyahControllers.searchAyah,
);

// Pagination
router.get('/', AyahControllers.getPaginatedAyahs);

// Get by Surah
router.get('/surah/:surahNumber', AyahControllers.getAyahsBySurah);

// Get single ayah
router.get('/:globalNumber', AyahControllers.getSingleAyah);

// Create
router.post(
  '/',
  validateRequest(AyahValidations.createAyahValidationSchema),
  AyahControllers.createAyah,
);

export const AyahRoutes = router;