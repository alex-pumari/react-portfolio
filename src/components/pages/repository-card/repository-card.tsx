import type { RepositoryDetails } from "../../../types/index.js"
import { Badge, Subtitle } from "../index.js"

interface RepositoryCardProps {
  repository: RepositoryDetails
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <div key={repository.id} className="repository-card" style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      <Subtitle className="repository-card__title">{repository.title!}</Subtitle>
      <img src={repository.imageUrl!} alt={repository.title!} />
      <p className="repository-card__description" style={{}}>Descripción: {repository.description}</p>
      <p className="repository-card__github-url" style={{}}>URL del repositorio: <a href={repository.githubUrl} style={{ color: 'blue' }}>{repository.githubUrl}</a></p>
      <p className="repository-card__page-url" style={{}}>URL de la página: <a href={repository.pageUrl} style={{ color: 'blue' }}>{repository.pageUrl}</a></p>
      <h3 className="repository-card__badges-title" style={{ fontWeight: 'bold' }}>Badges</h3>
      <ul className="repository-card__badges-container" style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {repository.badges.map((badge, index) => <Badge badge={badge} key={index} />)}
      </ul>
    </div>
  )
}