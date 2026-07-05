import { describe, it, expect } from "vitest"
import { buildRepositoryImageUrl } from "./build-repository-image-url.js"
import { GITHUB_IMAGE_BASE_URL } from "../../config/constants.js"

describe("build-repository-image-url", () => {
  it("should build the correct github image url", () => {
    const repositoryDetails = {
      fullName: "user/repository",
      imagePath: "images/logo.png",
    }

    const result = buildRepositoryImageUrl(repositoryDetails)

    expect(result).toBe(
      `${GITHUB_IMAGE_BASE_URL}/user/repository/refs/heads/main/images/logo.png`
    )
  })

  it("should throw a error if image path is empty", () => {
    const repositoryDetails = {
      fullName: "user/repository",
      imagePath: "",
    }

    expect(() => buildRepositoryImageUrl(repositoryDetails)).toThrow()
  })
})