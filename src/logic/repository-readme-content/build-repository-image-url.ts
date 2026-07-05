import { GITHUB_IMAGE_BASE_URL } from "../../config/constants.js"

interface RepositoryDetails {
  fullName: string
  imagePath: string
}

export function buildRepositoryImageUrl({ fullName, imagePath }: RepositoryDetails): string {
  if (!imagePath) throw new Error()

  return `${GITHUB_IMAGE_BASE_URL}/${fullName}/refs/heads/main/${imagePath}`
}