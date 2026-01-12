import { useState, useCallback } from "react";
import type { Job } from "../../../../types";

export const useWorkSelection = (jobs: Job[]) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedJob = jobs.find((job) => job.id === selectedId);

  const selectJob = useCallback((jobId: string) => {
    setSelectedId(jobId);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedId(null);
  }, []);

  return {
    selectedJob,
    selectJob,
    clearSelection,
    hasSelection: selectedId !== null,
  };
};
