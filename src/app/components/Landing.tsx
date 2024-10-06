import { useState } from "react";
import CodeEditor from "./Editor";
import { defaultCode, languages } from "../constants";
import { Button } from "@chakra-ui/react";
import { compile } from "@/utils/compile";

export default function Landing() {
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState(languages[0]);

  const handleClick = () => {
    console.log("reached here");

    const data = {
      language_id: language.id,
      source_code: btoa(code),
    };
    compile(data);
  };

  const onChange = () => {};
  return (
    <div>
      <h1>hi</h1>
      <CodeEditor code={code} language={language.value} onChange={onChange} />
      <Button onClick={handleClick}>Exec</Button>
    </div>
  );
}
