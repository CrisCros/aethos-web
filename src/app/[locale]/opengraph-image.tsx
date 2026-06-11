import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'

export const alt = 'Aethos Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home.hero' })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F172A',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            display: 'flex',
            background: '#2563EB',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              color: '#F8FAFC',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            Aethos
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 28,
              fontWeight: 600,
              color: '#60A5FA',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
            }}
          >
            Solutions
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            display: 'flex',
            fontSize: 26,
            fontWeight: 500,
            color: 'rgba(248,250,252,0.55)',
            letterSpacing: '0.06em',
          }}
        >
          {t('eyebrow')}
        </div>
      </div>
    ),
    { ...size }
  )
}
