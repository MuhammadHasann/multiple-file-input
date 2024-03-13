import { BiCloudUpload } from "react-icons/bi";

const DragOver = () => {
  return (
    <div className="pointer-events-none absolute -inset-1 flex flex-col justify-center items-center gap-1 bg-light bg-opacity-75 rounded">
      <BiCloudUpload className="text-6xl text-dark" />
      <h1 className="text-lg font-semibold text-dark">Relased the file</h1>
    </div>
  );
};

export default DragOver;
