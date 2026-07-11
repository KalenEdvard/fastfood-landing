import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST() {
  const today = new Date().toISOString().split('T')[0];
  await kv.hincrby('whatsapp_clicks', today, 1);
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const data = await kv.hgetall('whatsapp_clicks') as Record<string, number> | null;
  if (!data) return NextResponse.json([]);
  const sorted = Object.entries(data)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, count]) => ({ date, count: Number(count) }));
  return NextResponse.json(sorted);
}
