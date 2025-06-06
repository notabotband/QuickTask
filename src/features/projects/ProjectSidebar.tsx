import { Project } from './useProjects';
import { Button } from "../../shared/ui/Button/Button";
import { ProjectList } from "./ProjectList";
import './ProjectSidebar.css';

interface ProjectSidebarProps {
  projects: Project[];
  onSelectProject: (id: number) => void;
  onAddProject: () => void;
  selectedProjectId: number | null | undefined;
}

export function ProjectSidebar({ projects, onSelectProject, onAddProject, selectedProjectId }: ProjectSidebarProps) {
  return (
    <aside className="sidebar">
      <h1>Projects</h1>
      <Button 
        className="add-project-button"
        onClick={onAddProject}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Add Project
      </Button>
      <ProjectList 
        projects={projects} 
        onSelectProject={onSelectProject} 
        selectedProjectId={selectedProjectId}
      />
    </aside>
  );
} 