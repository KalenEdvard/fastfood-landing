'use client';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [data, setData] = useState<{ date: string; count: number }[]>([]);

  useEffect(() => {
    fetch('/api/whatsapp-click').then(r => r.json()).then(setData);
  }, []);

  const total = data.reduce((s, r) => s + r.count, 0);

  return (
    <div style={{ fontFamily: 'monospace', padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>WhatsApp переходы</h1>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>
        Всего: <strong style={{ color: '#f97316' }}>{total}</strong>
      </p>
      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '400px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px 16px', borderBottom: '1px solid #333', color: '#f97316' }}>Дата</th>
            <th style={{ textAlign: 'right', padding: '8px 16px', borderBottom: '1px solid #333', color: '#f97316' }}>Переходов</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ date, count }) => (
            <tr key={date}>
              <td style={{ padding: '8px 16px', borderBottom: '1px solid #1a1a1a' }}>{date}</td>
              <td style={{ padding: '8px 16px', borderBottom: '1px solid #1a1a1a', textAlign: 'right', color: '#4ade80' }}>{count}</td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={2} style={{ padding: '24px 16px', color: '#555', textAlign: 'center' }}>Нет данных</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
