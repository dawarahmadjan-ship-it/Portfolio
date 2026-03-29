import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllVideoProjectsFlattened } from "@/lib/helper";
import ProjectDetails from "@/components/project-details";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = getAllVideoProjectsFlattened().find((p) => p.id === id);

  useEffect(() => {
    if (!project) {
      // Redirect to home if project not found, or show a 404
      navigate("/", { replace: true });
      return;
    }
    
    // Update document title and metadata (Basic SEO for React)
    document.title = `${project.video_title} | Ahmad Dawar`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", project.video_description);
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return <ProjectDetails project={project} />;
}
