import type { Repository } from "./repository.js";

export interface GithubService {
  getRepositories: () => Promise<Repository[]>,
  getRepositoryReadmeContent: (repositoryFullName: string) => Promise<string>
}