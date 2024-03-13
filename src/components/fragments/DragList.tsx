"use client";

import { useState } from "react";
import { useFilesContext } from "../hookContext";
import { file } from "../interface";
import DragOver from "./DragOver";
import FileInfo from "./FileInfo";

const DragList: React.FC<{
  onHandleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onHandleDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onHandleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onHandleRemove: (id: number) => void;
  onHandleClear: (unsupportedFiles: Array<file>) => void;
  dragOver: boolean;
  files: Array<file>;
}> = ({ onHandleDragOver, onHandleDragLeave, onHandleDrop, onHandleRemove, onHandleClear, dragOver, files }) => {
  const { setAllFiles } = useFilesContext();
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpload = () => {
    const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
    const validFiles = files.filter((file) => allowedFormats.includes(file.type));
    const unsupportedFiles = files.filter((file) => !allowedFormats.includes(file.type));

    files.forEach((file) => {
      if (allowedFormats.includes(file.type)) {
        setLoading(true);

        setTimeout(() => {
          const currentTime = new Date();
          const hours = currentTime.getHours();
          const minutes = currentTime.getMinutes();
          const amOrPm = hours >= 12 ? "PM" : "AM";
          const formattedHours = hours % 12 || 12;
          const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
          const timeString = `${formattedHours}:${formattedMinutes} ${amOrPm}`;

          const filesWithTransferTime = validFiles.map((file) => ({
            ...file,
            timeStamp: timeString,
          }));

          setAllFiles((prevAllFiles) => [...prevAllFiles, ...filesWithTransferTime]);
          onHandleClear(unsupportedFiles);
          setLoading(false);
        }, 2000);
      } else {
        onHandleClear(unsupportedFiles);
      }
    });
  };

  return (
    <div
      className="relative grid grid-rows-[1fr_auto] gap-3 w-80 h-80 rounded"
      onDragOver={onHandleDragOver}
      onDragLeave={onHandleDragLeave}
      onDrop={onHandleDrop}
      //
    >
      <div className="file_info overflow-auto flex flex-col gap-3">
        {files.map((file, index) => (
          <FileInfo key={index} section="upload" file={file} onHandleRemove={onHandleRemove} loading={loading} />
        ))}
      </div>
      <div className="place-self-end">
        <button
          className="py-2 px-4 bg-primary text-sm font-semibold text-light rounded-lg"
          onClick={handleUpload}
          //
        >
          Upload
        </button>
      </div>
      {Boolean(dragOver) && <DragOver />}
    </div>
  );
};

export default DragList;
