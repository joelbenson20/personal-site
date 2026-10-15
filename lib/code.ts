import { repos, type Repo } from "@/data/code"

export function getAllRepos(): Repo[] {
  return repos;
}