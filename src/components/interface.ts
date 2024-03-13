export interface file {
  id: number;
  name: string;
  size: number;
  type: string;
  timeStamp?: string;
}

export interface FileContextType {
  allFiles: Array<file>;
  setAllFiles: React.Dispatch<React.SetStateAction<Array<file>>>;
}
