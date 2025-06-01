import { Container } from "./shared/components/Container/Container";
import { ProjectSidebar } from "./features/projects/ProjectSidebar";
import { ProjectDetails } from "./features/projects/ProjectDetails";
import { ProjectForm } from "./features/projects/ProjectForm";
import { useProjects } from "./features/projects/useProjects";

function App() {
  const {
    projects,
    selectedProjectId,
    selectProject,
    addProject,
    deleteProject,
    getSelectedProject,
  } = useProjects();

  const selectedProject = getSelectedProject();

  return (
    <Container>
      <ProjectSidebar
        projects={projects}
        onSelectProject={selectProject}
        onAddProject={() => selectProject(null)}
        selectedProjectId={selectedProjectId}
      />
      <main className="main-content">
        {selectedProjectId === null 
          ? <ProjectForm onAdd={addProject} onCancel={() => selectProject(undefined)} /> 
          : selectedProject && <ProjectDetails {...selectedProject} onDelete={() => deleteProject(selectedProject.id)} />}
      </main>
    </Container>
  );
}

export default App;
