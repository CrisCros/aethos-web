export type MockVariant = 'site' | 'landing' | 'leads' | 'automation' | 'dashboard'

export const MOCK_VARIANTS: MockVariant[] = ['site', 'landing', 'leads', 'automation', 'dashboard']

function Line({ w, h = 6, accent = false, style }: { w: string; h?: number; accent?: boolean; style?: React.CSSProperties }) {
  return <div className={accent ? 'mock-accent' : 'mock-line'} style={{ width: w, height: h, ...style }} />
}

function SiteBody() {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Line w="52px" h={8} accent />
        <div style={{ display: 'flex', gap: 8 }}>
          <Line w="28px" h={5} />
          <Line w="28px" h={5} />
          <Line w="36px" h={10} accent style={{ borderRadius: 5 }} />
        </div>
      </div>
      {/* hero */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, paddingTop: 8 }}>
        <Line w="70%" h={12} />
        <Line w="48%" h={12} />
        <Line w="56%" h={5} style={{ opacity: 0.6, marginTop: 4 }} />
        <Line w="64px" h={14} accent style={{ borderRadius: 7, marginTop: 6 }} />
      </div>
      {/* cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginTop: 6 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="mock-panel" style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div className="mock-accent" style={{ width: 14, height: 14, borderRadius: 7, opacity: 0.8 }} />
            <Line w="80%" h={5} />
            <Line w="60%" h={4} style={{ opacity: 0.6 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function LandingBody() {
  return (
    <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <Line w="42px" h={8} accent style={{ borderRadius: 4 }} />
      <Line w="68%" h={13} style={{ marginTop: 6 }} />
      <Line w="50%" h={13} />
      <Line w="58%" h={5} style={{ opacity: 0.6, marginTop: 4 }} />
      {/* email capture */}
      <div style={{ display: 'flex', gap: 6, marginTop: 10, width: '70%' }}>
        <div className="mock-panel" style={{ flex: 1, height: 18, borderRadius: 9 }} />
        <div className="mock-accent" style={{ width: 48, height: 18, borderRadius: 9 }} />
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 12 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div className="mock-accent" style={{ width: 7, height: 7, borderRadius: 4, opacity: 0.7 }} />
            <Line w="42px" h={4} />
          </div>
        ))}
      </div>
    </div>
  )
}

function LeadsBody() {
  const rows = [
    { w: '34%', chip: 'rgba(59,130,246,0.65)' },
    { w: '46%', chip: 'rgba(16,185,129,0.6)' },
    { w: '28%', chip: 'rgba(59,130,246,0.65)' },
    { w: '40%', chip: 'rgba(148,163,184,0.4)' },
  ]
  return (
    <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Line w="86px" h={9} />
        <Line w="52px" h={12} accent style={{ borderRadius: 6 }} />
      </div>
      {rows.map((r, i) => (
        <div key={i} className="mock-panel" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px' }}>
          <div className="mock-accent" style={{ width: 16, height: 16, borderRadius: 8, opacity: 0.55 }} />
          <Line w={r.w} h={6} />
          <div style={{ marginLeft: 'auto', width: 34, height: 10, borderRadius: 5, background: r.chip }} />
        </div>
      ))}
    </div>
  )
}

function AutomationBody() {
  return (
    <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Line w="96px" h={9} style={{ marginBottom: 4 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
            <div className="mock-panel" style={{ flex: 1, padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div className="mock-accent" style={{ width: 12, height: 12, borderRadius: 6, opacity: i === 1 ? 1 : 0.6 }} />
              <Line w="85%" h={5} />
              <Line w="55%" h={4} style={{ opacity: 0.6 }} />
            </div>
            {i < 2 && (
              <div style={{ width: 16, height: 1, background: 'rgba(96,165,250,0.5)', position: 'relative', flexShrink: 0 }}>
                <div
                  style={{
                    position: 'absolute', right: -1, top: -2.5,
                    width: 0, height: 0,
                    borderTop: '3px solid transparent',
                    borderBottom: '3px solid transparent',
                    borderLeft: '5px solid rgba(96,165,250,0.7)',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mock-panel" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', marginTop: 4 }}>
        <div style={{ width: 7, height: 7, borderRadius: 4, background: 'rgba(16,185,129,0.8)' }} />
        <Line w="46%" h={5} />
        <Line w="20%" h={5} style={{ marginLeft: 'auto', opacity: 0.5 }} />
      </div>
    </div>
  )
}

function DashboardBody() {
  const bars = [38, 58, 30, 70, 48, 84, 62]
  return (
    <div style={{ padding: '12px 14px', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 10 }}>
      {/* sidebar */}
      <div className="mock-panel" style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="mock-accent" style={{ width: 14, height: 14, borderRadius: 7 }} />
        {[0, 1, 2, 3].map((i) => (
          <Line key={i} w="100%" h={4} style={{ opacity: i === 0 ? 1 : 0.5 }} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mock-panel" style={{ padding: 7, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Line w="60%" h={4} style={{ opacity: 0.6 }} />
              <Line w="40%" h={8} accent={i === 0} />
            </div>
          ))}
        </div>
        {/* bar chart */}
        <div className="mock-panel" style={{ padding: '10px 12px 8px', display: 'flex', alignItems: 'flex-end', gap: 7, height: 74 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: '3px 3px 0 0',
                background: i === 5 ? 'rgba(59,130,246,0.85)' : 'rgba(59,130,246,0.35)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const BODIES: Record<MockVariant, () => React.ReactNode> = {
  site: SiteBody,
  landing: LandingBody,
  leads: LeadsBody,
  automation: AutomationBody,
  dashboard: DashboardBody,
}

export default function BrowserMock({ variant, url }: { variant: MockVariant; url: string }) {
  const Body = BODIES[variant]

  return (
    <div className="browser-mock" aria-hidden>
      <div className="browser-mock-bar">
        <span className="browser-mock-dot" />
        <span className="browser-mock-dot" />
        <span className="browser-mock-dot" />
        <span className="browser-mock-url">{url}</span>
      </div>
      <Body />
    </div>
  )
}
