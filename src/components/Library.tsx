import { FiBookOpen } from "react-icons/fi";
import FileInfo from "./fragments/FileInfo";
import { useFilesContext } from "./hookContext";

const Library = () => {
  const { allFiles, setAllFiles } = useFilesContext();

  const handleRemove = (id: number) => {
    setAllFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  };

  return (
    <section className="flex flex-col p-4 bg-light rounded-tr-lg rounded-br-lg">
      <div className="flex items-center gap-2">
        <FiBookOpen className="text-2xl text-primary" />
        <h1 className="text-xl font-semibold text-dark">Library</h1>
      </div>
      <hr className="mt-2 mb-5 w-full h-0.5 bg-gray-300 border-0" />
      <div className="file_info overflow-auto flex flex-col gap-3 items-center w-64 h-80">
        {allFiles.length > 0 ? allFiles.map((file, index) => <FileInfo key={index} section="library" onHandleRemove={handleRemove} file={file} />) : <h1 className="text-sm font-medium text-dark leading-[20rem]">Nothing Data</h1>}
      </div>
    </section>
  );
};

export default Library;
