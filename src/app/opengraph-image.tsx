import { ImageResponse } from 'next/og';

export const alt = 'Chirag Bhoi - Frontend Developer';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          color: 'white',
          position: 'relative',
          fontFamily: "'Inter', sans-serif", // You can specify fonts here
          padding: '0 40px',
          boxSizing: 'border-box',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #2dd4bf 2%, transparent 0%), radial-gradient(circle at 75px 75px, #2dd4bf 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            opacity: 0.1,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            zIndex: 1,
          }}
        >
          {/* Initial Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: '#2dd4bf',
              borderRadius: '12px',
              color: 'black',
              fontSize: '40px',
              fontWeight: 'bold',
              flexShrink: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CB
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              letterSpacing: '-0.05em',
              fontFamily: "'Inter', sans-serif",
              whiteSpace: 'nowrap',
            }}
          >
            Chirag Bhoi
          </div>
        </div>

        <div
          style={{
            marginTop: '20px',
            fontSize: '32px',
            color: '#a1a1aa', // zinc-400
            maxWidth: '800px',
            textAlign: 'center',
            zIndex: 1,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Frontend Developer • React • Next.js • TypeScript
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
