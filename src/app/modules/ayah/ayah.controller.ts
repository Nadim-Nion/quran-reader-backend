import type { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AyahServices } from './ayah.service';

const createAyah = catchAsync(async (req: Request, res: Response) => {
  const result = await AyahServices.createAyahIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Ayah created successfully',
    data: result,
  });
});

const getAyahsBySurah = catchAsync(async (req: Request, res: Response) => {
  const { surahNumber } = req.params;
  const result = await AyahServices.getAyahsBySurahFromDB(Number(surahNumber));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Ayahs fetched successfully',
    data: result,
  });
});

const getSingleAyah = catchAsync(async (req: Request, res: Response) => {
  const { globalNumber } = req.params;
  const result = await AyahServices.getSingleAyahFromDB(Number(globalNumber));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Ayah fetched successfully',
    data: result,
  });
});

const searchAyah = catchAsync(async (req: Request, res: Response) => {
  const { q } = req.query;
  const result = await AyahServices.searchAyahsFromDB(q as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Search completed successfully',
    data: result,
  });
});

const getPaginatedAyahs = catchAsync(async (req: Request, res: Response) => {
  const page = Number(req.query.page || 1);
  const limit = Number(req.query.limit || 20);
  const result = await AyahServices.getPaginatedAyahsFromDB(page, limit);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Ayahs fetched successfully',
    data: result.data,
  });
});

export const AyahControllers = {
  createAyah,
  getAyahsBySurah,
  getSingleAyah,
  searchAyah,
  getPaginatedAyahs,
};
