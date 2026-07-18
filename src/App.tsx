import { useState } from 'react'
import profilePhoto from './imports/image-1.png'
// removed logo imports (deleted by user)

const DARK_BG   = '#1A1A1A'
const CARD_DARK = '#222222'
const AMBER     = '#F59E0B'
const BLUE      = '#3B82F6'
const GREEN     = '#22C55E'
const PURPLE    = '#A855F7'
const RED       = '#EF4444'

const SKILL_BUBBLES = [
  { id: 'HTML',  bg: '#E34F26', label: 'HTML', light: false },
  { id: 'CSS',   bg: '#264DE4', label: 'CSS',  light: false },
  { id: 'JS',    bg: '#F7DF1E', label: 'JS',   light: true  },
  { id: 'React', bg: '#61DAFB', label: 'Re',   light: true  },
  { id: 'Next',  bg: '#DDDDDD', label: 'N',    light: true  },
  { id: 'TS',    bg: '#3178C6', label: 'TS',   light: false },
  { id: 'Figma', bg: '#A259FF', label: 'Fig',  light: false },
  { id: 'Tail',  bg: '#06B6D4', label: 'Tw',   light: true  },
  { id: 'Supa',  bg: '#3ECF8E', label: 'Sb',   light: true  },
  { id: 'PS',    bg: '#31A8FF', label: 'Ps',   light: false },
  { id: 'Git',   bg: '#F05032', label: 'Git',  light: false },
]

const jobs = [
  {
    empresa: 'FREELANCE',
    cargo: 'Designer Gráfico & Desenvolvedor Front-end (Freelance)',
    periodo: '2021 – Atual • São Paulo, Brasil',
    cor: RED,
    atividades: [
      'Desenvolvimento de websites institucionais e interfaces responsivas com foco em usabilidade',
      'Criação de identidades visuais, branding e materiais gráficos para clientes variados',
      'Levantamento de requisitos, elaboração de propostas e negociação comercial',
      'Gestão completa de projetos: planejamento, execução, testes e entrega',
      'Atendimento consultivo e manutenção do relacionamento com clientes',
      'Implementação Front-end, integração com APIs e otimização de performance',
    ],
  },
  {
    empresa: 'RaiaDrogasil',
    cargo: 'Atendente II / Balconista',
    periodo: 'Agosto/2025 – Atual',
    cor: AMBER,
    atividades: [
      'Atendimento consultivo a clientes em ambiente de alto fluxo',
      'Operação de caixa, controle de estoque e verificação de validade de produtos',
      'Organização operacional e suporte em processos internos',
      'Cumprimento de metas e colaboração com a equipe para alcance de objetivos comerciais',
      'Resolução ágil de problemas com foco na satisfação do cliente',
    ],
  },
  {
    empresa: "Rede D'Or São Luiz",
    cargo: 'Recepcionista Hospitalar',
    periodo: 'Maio/2023 – Agosto/2025',
    cor: BLUE,
    atividades: [
      'Admissão e cadastro de pacientes com atenção a protocolos de saúde',
      'Atendimento em pronto-socorro em situações de alta pressão',
      'Conferência e suporte administrativo de documentação hospitalar',
      'Colaboração com equipes multiprofissionais para organização do fluxo',
    ],
  },
  {
    empresa: 'CONFEA',
    cargo: 'Auxiliar Administrativo',
    periodo: 'Nov/2018 – Mar/2020',
    cor: PURPLE,
    atividades: [
      'Organização documental e controle de arquivos',
      'Apoio em processos administrativos e rotinas internas',
      'Suporte para demandas de controle e protocolo',
    ],
  },
]

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: color,
        marginLeft: 8,
        verticalAlign: 'middle',
      }}
    />
  )
}

function SectionLabel({ children, dot }: { children: React.ReactNode; dot?: string }) {
  return (
    <h2
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 18,
        fontWeight: 800,
        color: '#FFFFFF',
        margin: '0 0 20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
      {dot && <Dot color={dot} />}
    </h2>
  )
}

// Floating logos removed

export default function App() {
  const [showAll, setShowAll] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: DARK_BG,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: '#FFFFFF',
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 260 }}>
        {/* large "welcome" watermark */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            right: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(80px, 16vw, 160px)',
            fontWeight: 400,
            color: '#242424',
            userSelect: 'none',
            lineHeight: 1,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          welcome
        </div>

        {/* profile card */}
        <div
          className="responsive-profile"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 20,
            padding: '36px 36px',
            maxWidth: 460,
          }}
        >
          {/* photo */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 20,
              overflow: 'hidden',
              flexShrink: 0,
              border: '3px solid #333',
              backgroundColor: '#333',
            }}
          >
            <img
              src={profilePhoto}
              alt="Marcos Vinicius Gonçalves"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* name + details */}
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <div>
                <h1
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    margin: '0 0 2px',
                    lineHeight: 1.2,
                    color: '#FFFFFF',
                  }}
                >
                  Marcos Vinicius
                  <br />
                  Gonçalves
                </h1>
                <p style={{ fontSize: 12, color: '#666', margin: '4px 0 0', fontWeight: 500 }}>
                  Desenvolvedor Front-end &amp; Designer
                </p>
              </div>
              <span
                style={{
                  backgroundColor: '#2C2C2C',
                  color: '#777',
                  fontSize: 11,
                  padding: '4px 10px',
                  borderRadius: 4,
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                24 anos
              </span>
            </div>

            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 3 }}>
              {[
                { icon: '✉', val: 'marcosdoncontato@gmail.com' },
                { icon: '☎', val: '+55 (11) 94014-9674' },
                { icon: 'B', val: 'behance.net/marcosdondesign', href: 'https://behance.net/marcosdondesign' },
              ].map((c) => (
                <p key={c.val} style={{ fontSize: 12, color: '#666', margin: 0 }}>
                  <span style={{ marginRight: 6 }}>{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#666', textDecoration: 'underline' }}
                    >
                      {c.val}
                    </a>
                  ) : (
                    c.val
                  )}
                </p>
              ))}
            </div>

            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Front-end', 'UI Design', 'Web Design'].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '3px 10px',
                    borderRadius: 999,
                    border: '1px solid #2E2E2E',
                    fontSize: 11,
                    color: '#666',
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <button
                onClick={() => window.print()}
                className="print-button"
                style={{
                  padding: '10px 18px',
                  borderRadius: 10,
                  border: '1px solid #393939',
                  backgroundColor: '#111',
                  color: '#fff',
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#222'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#111'
                }}
              >
                Exportar em PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: '#252525', margin: '0 36px' }} />

      {/* ── OLÁ + RESUMO ─────────────────────────────────── */}
      <section
        className="responsive-section"
        style={{
          padding: '40px 36px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 36,
              fontWeight: 400,
              margin: '0 0 16px',
              color: '#FFFFFF',
            }}
          >
            Olá!
          </h2>
          <p style={{ fontSize: 13.5, lineHeight: 1.85, color: '#777', margin: 0 }}>
            Profissional com experiência em atendimento ao cliente, negociação e desenvolvimento
            de soluções digitais. Atuo como Designer Gráfico, Desenvolvedor Front-end e fundador
            do <span style={{ color: AMBER, fontWeight: 600 }}>Forge Protocol</span>, conduzindo
            projetos desde a prospecção e negociação até a entrega final.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.85, color: '#777', margin: '12px 0 0' }}>
            Tenho facilidade em entender necessidades de clientes, transformar problemas em
            soluções e construir relacionamentos de longo prazo. Busco oportunidades onde possa
            unir tecnologia, comunicação e visão de negócios para gerar resultados.
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#444',
              margin: '0 0 14px',
            }}
          >
            Business Skills
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              'Negociação Comercial', 'Atendimento Consultivo', 'Comunicação', 'Branding',
              'Gestão de Projetos', 'Product Thinking', 'CRM', 'Vendas', 'Relacionamento com Clientes',
              'Desenvolvimento de Produto', 'Gestão de Clientes', 'Resolução de Problemas',
              'Planejamento', 'Organização', 'Liderança',
            ].map((area) => (
              <span
                key={area}
                style={{
                  padding: '4px 12px',
                  borderRadius: 999,
                  backgroundColor: '#252525',
                  border: '1px solid #2E2E2E',
                  fontSize: 12,
                  color: '#777',
                }}
              >
                {area}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: 20,
              padding: '16px 20px',
              borderRadius: 10,
              backgroundColor: '#252525',
              border: '1px solid #2E2E2E',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 14 }}>⚡</span>
              <span style={{ fontWeight: 700, color: '#FFF', fontSize: 14 }}>Forge Protocol</span>
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: 999,
                  backgroundColor: BLUE,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                Projeto
              </span>
            </div>
            <p style={{ fontSize: 12, color: '#666', margin: 0, lineHeight: 1.6 }}>
              Idealizador e responsável pela gestão do produto, estratégia comercial e desenvolvimento
              completo da plataforma. O sistema W12 integra gestão financeira, check-in, dashboard
              operacional e módulos para academias, além de uma plataforma com IA para geração de
              treinos, planos alimentares e suplementação. Atuei em ideação, UI/UX, desenvolvimento
              front-end, branding, pesquisa de mercado e validação com clientes.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN SKILLS ──────────────────────────────────── */}
      <section
        className="responsive-section main-skills-section"
        style={{
          padding: '0 36px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          alignItems: 'start',
        }}
      >
        <div>
          <SectionLabel dot={AMBER}>Main skills</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <p style={{ fontSize: 12, color: '#777', margin: '0 0 8px', fontWeight: 700 }}>Tecnologias</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {[
                  'HTML','CSS','JavaScript','TypeScript','React','Next.js','Tailwind CSS','Supabase','Git','Figma','Photoshop','Illustrator'
                ].map((t) => (
                  <span key={t} style={{ padding: '6px 10px', borderRadius: 8, backgroundColor: '#252525', border: '1px solid #2E2E2E', color: '#777', fontSize: 12 }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, color: '#777', margin: '0 0 8px', fontWeight: 700 }}>Competências</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {[
                  'Negociação','Comunicação','Atendimento','Branding','UX/UI','Product Thinking','Gestão de Projetos','Resolução de Problemas','Organização','Trabalho em Equipe','Liderança','Relacionamento com Clientes','Prospecção','Vendas'
                ].map((c) => (
                  <span key={c} style={{ padding: '6px 10px', borderRadius: 8, backgroundColor: '#252525', border: '1px solid #2E2E2E', color: '#777', fontSize: 12 }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
          {[
            { label: 'marcosdoncontato@gmail.com', color: RED },
            { label: '+55 (11) 94014-9674', color: BLUE },
            { label: 'github.com/marcosvg', color: '#6B7280' },
          ].map((link) => (
            <div
              key={link.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 14px',
                borderRadius: 8,
                backgroundColor: '#252525',
                border: '1px solid #2E2E2E',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: link.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: '#777' }}>{link.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── IDIOMAS ──────────────────────────────────────── */}
      <section style={{ padding: '0 36px 40px' }}>
        <SectionLabel dot={BLUE}>Idiomas</SectionLabel>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {[
            { idioma: 'Português', nivel: 'Nativo', color: GREEN },
            { idioma: 'Inglês', nivel: 'Intermediário', color: BLUE },
          ].map((l) => (
            <div
              key={l.idioma}
              style={{
                padding: '14px 20px',
                borderRadius: 10,
                backgroundColor: '#252525',
                border: '1px solid #2E2E2E',
                minWidth: 140,
              }}
            >
              <p style={{ fontSize: 15, fontWeight: 700, color: '#FFF', margin: '0 0 8px' }}>
                {l.idioma}
              </p>
              <span
                style={{
                  display: 'inline-flex',
                  padding: '3px 10px',
                  borderRadius: 999,
                  backgroundColor: l.color,
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {l.nivel}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORMAÇÃO ─────────────────────────────────────── */}
      <section style={{ padding: '0 36px 40px' }}>
        <SectionLabel dot={PURPLE}>Formação</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { inst: 'EBAC', curso: 'Design Gráfico', status: 'Cursando', color: PURPLE },
            { inst: 'Fundação Bradesco', curso: 'Fund. do Design Gráfico', status: 'Dez/2024', color: GREEN },
            { inst: 'SoloLearn', curso: 'HTML e CSS', status: 'Nov/2019', color: BLUE },
            { inst: 'Prime Cursos', curso: 'Pacote Office', status: 'Mai/2021', color: AMBER },
          ].map((f) => (
            <div
              key={f.inst}
              style={{
                padding: '14px 16px',
                borderRadius: 10,
                backgroundColor: '#252525',
                border: '1px solid #2E2E2E',
                borderTop: `3px solid ${f.color}`,
              }}
            >
              <p style={{ fontSize: 10, color: '#444', margin: '0 0 4px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {f.inst}
              </p>
              <p style={{ fontSize: 13, color: '#DDD', fontWeight: 600, margin: '0 0 10px', lineHeight: 1.35 }}>
                {f.curso}
              </p>
              <span
                style={{
                  padding: '2px 10px',
                  borderRadius: 999,
                  backgroundColor: f.color,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                {f.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESULTADOS ───────────────────────────────────── */}
      <section style={{ padding: '0 36px 24px' }}>
        <SectionLabel dot={GREEN}>Resultados</SectionLabel>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            '🚀 Fundador e criador do Forge Protocol.',
            '🎨 Mais de 20 projetos entregues entre branding, identidade visual, websites e desenvolvimento web.',
            '🤝 Desenvolvimento de identidade visual para Fiber Flux.',
            '🏎️ Projeto de branding para Bertolino Motors (Itália).',
            '🌿 Desenvolvimento de materiais gráficos para StonedShop.',
            '👕 Identidade visual para Low Life Streetwear.',
            '💻 Desenvolvimento de websites modernos e interfaces responsivas.',
            '🎯 Gestão completa dos projetos desde briefing até entrega.',
            '📈 Experiência em negociação comercial, atendimento consultivo e relacionamento com clientes.',
          ].map((r) => (
            <div key={r} style={{ padding: '10px 14px', borderRadius: 10, backgroundColor: '#252525', border: '1px solid #2E2E2E', color: '#DDD', fontSize: 13 }}>
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJETOS ─────────────────────────────────────── */}
      <section style={{ padding: '0 36px 24px' }}>
        <SectionLabel dot={AMBER}>Projetos</SectionLabel>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            'Forge Protocol','Fiber Flux','Bertolino Motors','StonedShop','Low Life Streetwear','Guadalupe Stickers','Maria Vitória Advocacia','Mard Joias','Kairós Design','RNS Studio'
          ].map((p) => (
            <span key={p} style={{ padding: '8px 12px', borderRadius: 8, backgroundColor: '#252525', border: '1px solid #2E2E2E', color: '#777', fontSize: 13 }}>{p}</span>
          ))}
        </div>
      </section>

      {/* Floating logos removed per user request */}

      {/* Projetos removidos por solicitação do usuário */}

      {/* ── EXPERIÊNCIA ──────────────────────────────────── */}
      <section style={{ padding: '0 36px 60px' }}>
        <SectionLabel dot={AMBER}>Experiência</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
          {(showAll ? jobs : jobs.slice(0, 3)).map((job) => (
            <div
              key={job.empresa}
              className="experience-card"
              style={{
                padding: '20px',
                backgroundColor: CARD_DARK,
                border: '1px solid #2A2A2A',
                borderTop: `4px solid ${job.cor}`,
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444', margin: '0 0 4px' }}>
                {job.periodo}
              </p>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#FFF',
                  margin: '0 0 2px',
                  lineHeight: 1.2,
                }}
              >
                {job.empresa}
              </h3>
              <p style={{ fontSize: 12, color: job.cor, fontWeight: 600, margin: '0 0 14px' }}>
                {job.cargo}
              </p>
              <ul style={{ margin: 0, padding: '0 0 0 14px', listStyle: 'disc' }}>
                {job.atividades.map((a) => (
                  <li key={a} style={{ fontSize: 12, color: '#666', lineHeight: 1.7 }}>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            style={{
              marginTop: 16,
              padding: '10px 24px',
              backgroundColor: 'transparent',
              border: '1px solid #2E2E2E',
              borderRadius: 8,
              color: '#555',
              fontSize: 13,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = AMBER
              e.currentTarget.style.color = AMBER
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2E2E2E'
              e.currentTarget.style.color = '#555'
            }}
          >
            Ver mais experiências
          </button>
        )}
      </section>

      <footer className="responsive-footer" style={{ borderTop: '1px solid #252525', padding: '20px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: '#333' }}>Marcos Vinicius Gonçalves — 2026</span>
        <span style={{ fontSize: 11, color: '#2A2A2A' }}>Desenvolvedor Front-end &amp; Designer</span>
      </footer>
    </div>
  )
}
