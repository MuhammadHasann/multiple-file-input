import { createContext, useContext } from "react";
import { FileContextType } from "./interface";

export const FilesContext = createContext<FileContextType | null>(null);

export const useFilesContext = () => {
  const context = useContext(FilesContext);

  if (!context) {
    throw new Error("useFilesContext must be used within a FilesProvider");
  }
  return context;
};
