import type { Repository, RepositoryReadme } from "./index.js";

export type RepositoryDetails = Repository & Omit<RepositoryReadme, "imagePath"> & { imageUrl: string | null }