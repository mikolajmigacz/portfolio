import { useState, useCallback } from "react";
import type { Project } from "../../../../types";

export const useProjectSelection = (projects: Project[]) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((project) => project.id === selectedId);

  const selectProject = useCallback((projectId: string) => {
    setSelectedId(projectId);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedId(null);
  }, []);

  return {
    selectedProject,
    selectProject,
    clearSelection,
    hasSelection: selectedId !== null,
  };
};
