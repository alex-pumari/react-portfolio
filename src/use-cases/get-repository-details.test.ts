import { describe, test, expect, vi } from "vitest"
import { getRepositoriesDetails } from "./get-repository-details.js"
import type { GithubService } from "../types/index.js"

describe("get-repositories-details", () => {
  test("should return repositories merged with parsed readme", async () => {
    const mockRepositories = [
      { id: 1, fullName: "user/repo1" },
      { id: 2, fullName: "user/repo2" }
    ]

    const mockGithubService: GithubService = {
      getRepositories: vi.fn().mockResolvedValue(mockRepositories),
      getRepositoryReadmeContent: vi.fn().mockResolvedValue("# Title")
    }

    const result = await getRepositoriesDetails({
      githubService: mockGithubService
    })

    expect(mockGithubService.getRepositories).toHaveBeenCalledTimes(1)
    expect(mockGithubService.getRepositoryReadmeContent).toHaveBeenCalledTimes(2)

    expect(result.length).toBe(2)
  })
})