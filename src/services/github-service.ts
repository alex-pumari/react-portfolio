import { formatRepositories } from "../adapters/repositories.js";
import { decode } from "../logic/index.js";
import { fetchJson } from "./fetch-json.js";
import type { GitHubRepository, GithubService, Repository } from "../types/index.js";
import { GITHUB_API_BASE, REPOSITORIES_URL } from "../config/constants.js";

export const githubService: GithubService = {

  getRepositories(): Promise<Repository[]> {
    return fetchJson<GitHubRepository[]>(REPOSITORIES_URL)
      .then(repositories => formatRepositories(repositories));
  },

  getRepositoryReadmeContent(repositoryFullName: string): Promise<string> {
    type RepositoryReadme = { content?: string }
  
    const url = `${GITHUB_API_BASE}/repos/${repositoryFullName}/readme`;
  
    return fetchJson<RepositoryReadme>(url)
      .then(response => {
        if (!response.content) throw new Error("README content not found.");
        const decodedReadmeContent = decode.utf8(decode.base64(response.content));

        return decodedReadmeContent;
      });
  }
};