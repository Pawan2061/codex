"use client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import DropDown from "./Dropdown";

export default function CodeEditor({ code, language, onChange }: any) {
  const [value, setValue] = useState(code || "");

  const handleChange = (value: any) => {
    onChange(value);
  };

  return (
    <div className="rounded-md  flex shadow-xl mt-6 ">
      <Editor
        height="400px"
        language={language ? language : "javascript"}
        width="600px"
        value={value}
        onChange={handleChange}
        theme="vs-dark"
      />
    </div>
  );
}
