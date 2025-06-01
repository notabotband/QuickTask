import { useState } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface UseProjectsResult {
  projects: Project[];
  selectedProjectId: number | null | undefined;
  selectProject: (id: number | null | undefined) => void;
  addProject: (newProject: Omit<Project, 'id'>) => void;
  deleteProject: (id: number) => void;
  getSelectedProject: () => Project | undefined;
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null | undefined>(undefined);

  const selectProject = (id: number | null | undefined) => {
    setSelectedProjectId(id);
  };

  const addProject = (newProject: Omit<Project, 'id'>) => {
    setProjects(prevProjects => [...prevProjects, { ...newProject, id: Math.random() }]);
    setSelectedProjectId(null);
  };

  const deleteProject = (id: number) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    setSelectedProjectId(undefined);
  };

  const getSelectedProject = (): Project | undefined => {
    return projects.find(project => project.id === selectedProjectId);
  };

  return {
    projects,
    selectedProjectId,
    selectProject,
    addProject,
    deleteProject,
    getSelectedProject,
  };
} 