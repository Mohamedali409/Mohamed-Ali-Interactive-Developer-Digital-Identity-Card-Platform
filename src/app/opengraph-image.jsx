import { ImageResponse } from 'next/og';

export const alt = 'Mohamed Ali (محمد علي) | Full-Stack Developer | Backend-Focused Software Engineer';
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
          background: 'linear-gradient(135deg, #07090e 0%, #0d1322 50%, #151d36 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
          padding: '60px 80px',
        }}
      >
        {/* Background ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.22)',
            filter: 'blur(90px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '80px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.18)',
            filter: 'blur(80px)',
          }}
        />

        {/* Left Info Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '680px',
          }}
        >
          {/* Top Pill Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              gap: '8px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(96, 165, 250, 0.35)',
              borderRadius: '9999px',
              padding: '8px 22px',
              fontSize: '15px',
              fontWeight: 700,
              color: '#60a5fa',
              marginBottom: '20px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            Backend Architecture • DevOps • AI Integration
          </div>

          {/* Main Name */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              letterSpacing: '-1px',
              lineHeight: 1.1,
              marginBottom: '6px',
              color: '#ffffff',
            }}
          >
            Mohamed Ali
          </div>

          {/* Arabic Name Subtitle */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#38bdf8',
              marginBottom: '16px',
            }}
          >
            محمد علي
          </div>

          {/* Professional Role */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#cbd5e1',
              marginBottom: '24px',
            }}
          >
            Full-Stack Developer | Backend-Focused Software Engineer
          </div>

          {/* Tech Stack Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
            {['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'].map((tech) => (
              <div
                key={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#94a3b8',
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#64748b',
              letterSpacing: '0.5px',
            }}
          >
            https://github.com/Mohamedali409
          </div>
        </div>

        {/* Right Photo Column */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Glowing Avatar Border */}
          <div
            style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #06b6d4 100%)',
              padding: '7px',
              boxShadow: '0 20px 50px rgba(59, 130, 246, 0.35)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#0f172a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #1e293b',
              }}
            >
              <div
                style={{
                  fontSize: '84px',
                  fontWeight: 900,
                  color: '#38bdf8',
                  letterSpacing: '3px',
                }}
              >
                MA
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#94a3b8',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginTop: '-4px',
                }}
              >
                Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
