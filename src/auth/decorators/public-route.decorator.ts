import { SetMetadata } from '@nestjs/common';

export const ALLOW_ANONNYMOUS_KEY = 'isPublic';
export const AllowAnnonymous = () => SetMetadata(ALLOW_ANONNYMOUS_KEY, true);