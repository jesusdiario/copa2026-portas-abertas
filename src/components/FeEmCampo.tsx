import { feProfile, FE_EM_CAMPO_URL } from '../data/feEmCampo'
import PrayIcon from './PrayIcon'

/**
 * Bloco "Fé em Campo" (Portas Abertas): texto + chamado à oração de uma seleção
 * que está na Lista Mundial da Perseguição. Reutilizado na página do time e na
 * tela da partida. Não renderiza nada se a seleção não tiver perfil.
 */
export default function FeEmCampo({ code, id }: { code: string | null | undefined; id?: string }) {
  const fe = feProfile(code)
  if (!fe) return null
  return (
    <section className="card card-pad fe-card" id={id}>
      <div className="fe-head">
        <PrayIcon size={26} className="fe-icon" />
        <div>
          <h2 className="fe-title">Fé em Campo</h2>
          <p className="fe-sub small muted">
            {fe.country} · {fe.lmpRank}º na Lista Mundial da Perseguição 2026
          </p>
        </div>
      </div>
      <div className="fe-person">{fe.person}</div>
      {fe.quote && <blockquote className="fe-quote">“{fe.quote}”</blockquote>}
      <p className="fe-text">{fe.text}</p>
      <a className="btn fe-cta" href={FE_EM_CAMPO_URL} target="_blank" rel="noopener noreferrer">
        <PrayIcon size={18} />
        {fe.cta}
      </a>
    </section>
  )
}
