import { MOCK_RETURNS, MOCK_CUSTOMERS, MOCK_PRODUCTS } from '@/lib/data';
import { Return, Customer, Product } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

const MAX_RESULTS = 20;
const DEFAULT_EMPTY_QUERY_RESULTS = 5;

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type'); // Optional: 'returns', 'customers', 'products'

  const lowerCaseQuery = query.toLowerCase();
  let results: (Return | Customer | Product)[] = [];

  if (!query) {
    // If query is empty, return a few default items (e.g., first 5 returns)
    results = MOCK_RETURNS.slice(0, DEFAULT_EMPTY_QUERY_RESULTS);
    return NextResponse.json({
      ok: true,
      data: {
        results: results,
        total: results.length,
        query: query,
        message: 'Empty query, returning default items.',
      },
    });
  }

  if (!type || type === 'returns') {
    const returnResults = MOCK_RETURNS.filter(
      (item) =>
        item.customerName.toLowerCase().includes(lowerCaseQuery) ||
        item.orderId.toLowerCase().includes(lowerCaseQuery) ||
        item.productName.toLowerCase().includes(lowerCaseQuery) ||
        item.returnReason.toLowerCase().includes(lowerCaseQuery)
    );
    results.push(...returnResults);
  }

  if (!type || type === 'customers') {
    const customerResults = MOCK_CUSTOMERS.filter(
      (item) =>
        item.firstName.toLowerCase().includes(lowerCaseQuery) ||
        item.lastName.toLowerCase().includes(lowerCaseQuery) ||
        item.email.toLowerCase().includes(lowerCaseQuery)
    );
    results.push(...customerResults);
  }

  if (!type || type === 'products') {
    const productResults = MOCK_PRODUCTS.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.sku.toLowerCase().includes(lowerCaseQuery)
    );
    results.push(...productResults);
  }

  // Deduplicate results if searching across multiple types might yield the same ID
  const uniqueResults = Array.from(new Map(results.map(item => [item.id, item])).values());
  const limitedResults = uniqueResults.slice(0, MAX_RESULTS);

  return NextResponse.json({
    ok: true,
    data: {
      results: limitedResults,
      total: limitedResults.length,
      query: query,
    },
  });
}