import type { Badge } from "../../../types/index.js"
import "./badge.scss"

export function Badge({ badge }: { badge: Badge }) {
  return (
    <li className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
      <img src={badge.url} alt={badge.name} style={{ height: '1em', width: 'auto' }} />
    </li>
  )
}