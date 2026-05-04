import type { Request, Response } from 'express';
import { SurahServices } from './surah.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createSurah = catchAsync(async (req: Request, res: Response) => {
  const result = await SurahServices.createSurahIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Surah created successfully',
    data: result,
  });
});

const getAllSurahs = catchAsync(async (_req: Request, res: Response) => {
  const result = await SurahServices.getAllSurahsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Surahs fetched successfully',
    data: result,
  });
});

const getSingleSurah = catchAsync(async (req: Request, res: Response) => {
  const { number } = req.params;
  const result = await SurahServices.getSingleSurahFromDB(Number(number));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Surah fetched successfully',
    data: result,
  });
});

const searchSurah = catchAsync(async (req: Request, res: Response) => {
  const { q } = req.query;
  const result = await SurahServices.searchSurahsFromDB(q as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Search completed successfully',
    data: result,
  });
});

export const SurahControllers = {
  createSurah,
  getAllSurahs,
  getSingleSurah,
  searchSurah,
};