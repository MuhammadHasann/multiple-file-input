"use client";

import { useRef, useState } from "react";
import { CgAdd } from "react-icons/cg";
import "./upload.css";
import DragSection from "./fragments/DragSection";
import DragList from "./fragments/DragList";
import { file } from "./interface";

const FileUpload = () => {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<Array<file>>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const newFiles: Array<file> = selectedFiles.map((file) => ({
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);
  };
  const handleFileSelect = () => inputRef.current?.click();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragOver(false);

    const droppedFiles = Array.from(event.dataTransfer.files);
    const newFiles: Array<file> = droppedFiles.map((file) => ({
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (id: number) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  const handleClear = (unsupportedFiles: Array<file>) => setFiles(unsupportedFiles);

  return (
    <section className="relative z-10 flex flex-col p-4 bg-light rounded-lg shadow-custom">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-dark">Upload</h1>
        <button onClick={() => inputRef.current?.click()}>
          <CgAdd className="text-2xl" />
        </button>
        <input ref={inputRef} type="file" multiple hidden onChange={handleFileChange} />
      </div>
      <hr className="mt-2 mb-5 w-full h-0.5 bg-gray-300 border-0" />
      {files.length > 0 ? (
        <DragList
          onHandleDragOver={handleDragOver}
          onHandleDragLeave={handleDragLeave}
          onHandleDrop={handleDrop}
          onHandleRemove={handleRemove}
          onHandleClear={handleClear}
          dragOver={dragOver}
          files={files}
          //
        />
      ) : (
        <DragSection
          onHandleDragOver={handleDragOver}
          onHandleDragLeave={handleDragLeave}
          onHandleDrop={handleDrop}
          selectFile={handleFileSelect}
          dragOver={dragOver}
          //
        />
      )}
    </section>
  );
};

export default FileUpload;
