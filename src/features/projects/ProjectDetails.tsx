import { Project } from './useProjects';
import './ProjectDetails.css';

interface ProjectDetailsProps extends Omit<Project, 'id'> {
  onDelete: () => void;
}

export function ProjectDetails({ title, description, date, onDelete }: ProjectDetailsProps) {
  let formattedDate = '';
  if (date) {
    try {
      formattedDate = new Date(date).toLocaleDateString('en-EN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {}
  }

  return (
    <div className="project-details">
      <h3>{title}</h3>
      <p>{description}</p>
      {formattedDate && (
        <div className="date">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {formattedDate}
        </div>
      )}
      <div className="actions">
        <button className="delete-button" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          Delete Project
        </button>
      </div>
    </div>
  );
} 