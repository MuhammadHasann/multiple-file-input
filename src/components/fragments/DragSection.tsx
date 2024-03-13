import { HiOutlineUpload } from "react-icons/hi";
import DragOver from "./DragOver";

const DragSection: React.FC<{
  onHandleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onHandleDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onHandleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  selectFile: () => void;
  dragOver: boolean;
}> = ({ onHandleDragOver, onHandleDragLeave, onHandleDrop, selectFile, dragOver }) => {
  return (
    <div
      className="relative flex justify-center items-center w-80 h-80 bg-second bg-opacity-25 border border-dashed border-primary rounded"
      onDragOver={onHandleDragOver}
      onDragLeave={onHandleDragLeave}
      onDrop={onHandleDrop}
      //
    >
      <div className="flex flex-col justify-center items-center gap-3 p-3 bg-light bg-opacity-25 border border-dashed border-primary rounded">
        <h1 className="text-lg font-medium text-primary">Drag & drop files</h1>
        <span className="text-sm text-primary">or</span>
        <button
          className="flex items-center gap-2 py-2 px-4 bg-primary rounded-md"
          onClick={selectFile}
          //
        >
          <HiOutlineUpload className="text-lg text-light" />
          <span className="text-sm font-medium text-light">Import from computer</span>
        </button>
      </div>
      {Boolean(dragOver) && <DragOver />}
    </div>
  );
};

export default DragSection;
