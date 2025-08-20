import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F4F3EF',
          color: '#1F1F1F',
          fontSize: 64,
          fontFamily: 'Inter',
        }}
      >
        Borgesa — Wedding Planning
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
