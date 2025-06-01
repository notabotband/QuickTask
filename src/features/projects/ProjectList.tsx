import { Project } from './useProjects';
import './ProjectList.css';

interface ProjectListProps {
  projects: Project[];
  onSelectProject: (id: number) => void;
  selectedProjectId: number | null | undefined;
}

export function ProjectList({ projects, onSelectProject, selectedProjectId }: ProjectListProps) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id}>
          <button
            className={`project-item ${project.id === selectedProjectId ? 'active' : ''}`}
            onClick={() => onSelectProject(project.id)}
          >
            <svg className="project-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            {project.title}
          </button>
        </li>
      ))}
    </ul>
  );
} 