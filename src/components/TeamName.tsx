import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { useAppData } from '../data/DataContext'
import { feProfile } from '../data/feEmCampo'
import Flag from './Flag'
import PrayIcon from './PrayIcon'

interface TeamNameProps {
  code: string
  flagSize?: number
  link?: boolean
  bold?: boolean
  className?: string
}

/** flag + localized team name, optionally linking to the team page */
export default function TeamName({
  code,
  flagSize = 22,
  link = true,
  bold = false,
  className = '',
}: TeamNameProps) {
  const { pick } = useI18n()
  const { teams } = useAppData()
  const team = teams[code]
  const name = team ? pick(team.name, code) : code
  const fe = feProfile(code)
  const inner = (
    <>
      <Flag team={team} size={flagSize} />
      <span className="nm" style={bold ? { fontWeight: 700 } : undefined}>
        {name}
      </span>
      {fe && (
        <span className="team-pray" title="Fé em Campo — ore por esta nação">
          <PrayIcon size={14} />
        </span>
      )}
    </>
  )
  if (link && team) {
    return (
      <Link className={`team-inline ${className}`} to={`/team/${code}`}>
        {inner}
      </Link>
    )
  }
  return <span className={`team-inline ${className}`}>{inner}</span>
}
