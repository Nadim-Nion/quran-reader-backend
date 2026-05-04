import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SurahControllers } from './surah.controller';
import { SurahValidations } from './surah.validation';

const router = express.Router();

router.get('/search/query', SurahControllers.searchSurah);

router.post(
  '/',
  validateRequest(SurahValidations.createSurahValidationSchema),
  SurahControllers.createSurah,
);

router.get('/', SurahControllers.getAllSurahs);

router.get('/:number', SurahControllers.getSingleSurah);

export const SurahRoutes = router;
