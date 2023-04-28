import React from "react";
import FormData from "form-data";
import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);

  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:2424/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      });
  };

  // TODO CHANGE "test" BY API
  return (
    <div>
      <input
        type="file"
        name="test"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button type="submit" onClick={(e) => upload(e)}>
        submit
      </button>
    </div>
  );
};

export default Upload;
