import React, { useRef, useState } from "react";

const FileDrop = ({ onDrop }) => {
  const [drag, setDrag] = useState(false);
  const [filename, setFilename] = useState("");
  const dropRef = useRef(null);
  const inputRef = useRef(null);
  let dragCounter = 0;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) setDrag(true);
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter === 0) setDrag(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onDrop(e.dataTransfer.files[0]);
      setFilename(e.dataTransfer.files[0].name);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    onDrop(file);
    setFilename(file.name);
  };

  React.useEffect(() => {
    let div = dropRef.current;
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDrop);
    return () => {
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div
      ref={dropRef}
      className={drag ? "filedrop drag" : filename ? "filedrop ready" : "filedrop"}
    >
      {filename && !drag ? <div>{filename}</div> : <div>Drop a file here!</div>}
      <input type="file" ref={inputRef} style={{ display: "none" }} onChange={handleFileInputChange} />
      <button onClick={() => inputRef.current.click()}>Select your file</button>
    </div>
  );
};

export default FileDrop;
