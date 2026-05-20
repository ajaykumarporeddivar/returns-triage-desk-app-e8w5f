import {
  MOCK_RETURNS,
  MOCK_CUSTOMERS,
  MOCK_PRODUCTS,
  STATS,
} from '@/lib/data';
import { Return, Customer, Product } from '@/lib/types';
import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(): Promise<NextResponse> {
  const data = {
    returns: MOCK_RETURNS,
    customers: MOCK_CUSTOMERS,
    products: MOCK_PRODUCTS,
    stats: STATS,
  };

  return NextResponse.json(
    {
      ok: true,
      data: {
        returns: MOCK_RETURNS,
        customers: MOCK_CUSTOMERS,
        products: MOCK_PRODUCTS,
        stats: STATS,
        totalReturns: MOCK_RETURNS.length,
        totalCustomers: MOCK_CUSTOMERS.length,
        totalProducts: MOCK_PRODUCTS.length,
      },
    },
    { headers: corsHeaders }
  );
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    return NextResponse.json(
      {
        ok: true,
        message: 'Demo mode — data not persisted',
        received: body,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Invalid JSON body',
      },
      { status: 400, headers: corsHeaders }
    );
  }
}

export async function OPTIONS(): Promise<NextResponse> {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}