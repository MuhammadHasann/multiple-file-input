"use client";

import { HiX } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { file } from "../interface";
import { useEffect, useState } from "react";

const FileInfo: React.FC<{
  onHandleRemove: (id: number) => void;
  section: string;
  file: file;
  loading?: boolean;
}> = ({ onHandleRemove, section, file }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setMessage(getMessage(file.type));
    setColor(getColor(file.type));
  }, [file.type]);

  const getMessage = (fileType: string): string => {
    const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
    return allowedFormats.includes(fileType) ? "Ready to upload" : "This file type allowed";
  };

  const getColor = (fileType: string): string => {
    const allowedFormats = ["application/pdf", "image/jpeg", "image/png"];
    return allowedFormats.includes(fileType) ? "text-green-500" : "text-red-500";
  };

  if (!file) return;

  return (
    <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-3 p-3 w-full border border-gray-400 rounded-lg">
      <div className="p-3 bg-second rounded">
        <FiFileText className="text-2xl text-primary" />
      </div>
      <div className="flex flex-col self-start min-w-0">
        <h1 className="w-full text-xs text-dark truncate">{file.name}</h1>
        <span className="text-xs text-gray-500">{file.size / 1000} kb</span>
        {section === "upload" &&
          (loading ? (
            <div className="relative mt-1 w-full h-1">
              <div className="absolute inset-0 bg-primary rounded-full"></div>
              <span className="absolute -top-5 right-0 inline-block text-xs">100%</span>
            </div>
          ) : (
            <span className={`text-xs font-medium ${color}`}>{message}</span>
          ))}

        {section !== "upload" && <span className="text-xs text-dark">{file.timeStamp}</span>}
      </div>
      <button className="cursor-pointer" onClick={() => onHandleRemove(file.id)}>
        <HiX className="text-xl text-gray-400 hover:text-dark" />
      </button>
      {/* <div className="absolute -bottom-1/4 right-5 py-1 px-2 bg-primary rounded-lg">
        <span className="text-xs text-light leading-none">pdf</span>
      </div> */}
    </div>
  );
};

export default FileInfo;
