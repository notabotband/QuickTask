import { useState } from 'react';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);

  const selectProject = (id) => {
    setSelectedProjectId(id);
  };

  const addProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, { ...newProject, id: Math.random() }]);
    setSelectedProjectId(null);
  };

  const deleteProject = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    setSelectedProjectId(undefined);
  };

  const getSelectedProject = () => {
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