"use client";

import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import Library from "@/components/Library";
import { file } from "@/components/interface";
import { FilesContext } from "@/components/hookContext";

export default function Home() {
  const [allFiles, setAllFiles] = useState<Array<file>>([]);

  return (
    <section className="w-full bg-light">
      <div className="container">
        <div className="grid place-content-center w-full min-h-dvh">
          <div className="flex justify-center items-center shadow-custom">
            <FilesContext.Provider value={{ allFiles, setAllFiles }}>
              <FileUpload />
              <Library />
            </FilesContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}
