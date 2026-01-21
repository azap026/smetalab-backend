import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({
    version: '1.7.7',
    commit: '6d39369', // Last commit SHA
    env: process.env.NODE_ENV,
  });
};
