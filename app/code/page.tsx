import RepoCard from "@/components/RepoCard";
import { getAllRepos } from "@/lib/code";

export const metadata = { title: "Code" };

export default function CodeIndex() {
  const repos = getAllRepos();
  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <RepoCard key={repo.title} repo={repo} />
      ))}
    </div>
  );
}
