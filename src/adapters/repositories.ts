import type { GitHubRepository, Repository } from "../types/index.js"

export function formatRepositories (githubRepositories: GitHubRepository[]): Repository[] {
  return githubRepositories.map(toRepository)
}

function toRepository ({ id, full_name, html_url, homepage, description }: GitHubRepository): Repository {
  return {
    id,
    fullName: full_name,
    githubUrl: html_url,
    pageUrl: homepage,
    description,
  }
}