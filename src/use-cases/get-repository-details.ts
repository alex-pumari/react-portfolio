import { parseRepositoryReadmeContent, buildRepositoryImageUrl } from "../logic/index.js"
import type { GithubService, RepositoryDetails, RepositoryReadme } from "../types/index.js"

export async function getRepositoriesDetails(
  { githubService }: { githubService: GithubService }
): Promise<RepositoryDetails[]> {
  const repositories = await githubService.getRepositories()

  const results = await Promise.all(
    repositories.map(async repository => {
      const readmeContent = await githubService.getRepositoryReadmeContent(repository.fullName)
      const { title, badges, imagePath, videoUrl, learnings }: RepositoryReadme = parseRepositoryReadmeContent(readmeContent)
      const imageUrl = imagePath
        ? buildRepositoryImageUrl({ fullName: repository.fullName, imagePath })
        : null

      return { ...repository, title, badges, videoUrl, learnings, imageUrl }
    })
  )

  const validResults: RepositoryDetails[] = results.filter(isValidRepositoryDetails)

  return validResults
}

function isValidRepositoryDetails({ id, title, description, imageUrl }: RepositoryDetails): boolean {
  const PORTFOLIO_REPOSITORY_ID = 976695014
  const PERSONAL_REPOSITORY_ID = 1019148150
  const repositoryHasValidData = title !== null && description !== null && imageUrl !== null

  return id !== PERSONAL_REPOSITORY_ID && id !== PORTFOLIO_REPOSITORY_ID && repositoryHasValidData
}

