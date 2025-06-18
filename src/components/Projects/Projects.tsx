import { useEffect, useState } from "react";
import Project from "@/components/Project/Project";

type ProjectType = {
  title: string;
  description: string;
  items: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects.");
        return res.json();
      })
      .then((data: ProjectType[]) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-muted-foreground">Loading projects...</p>;
  if (error) return <p className="text-destructive">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 space-y-6 max-h-full px-4">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
