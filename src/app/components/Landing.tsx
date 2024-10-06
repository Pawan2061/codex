// import { useState } from "react";
// import CodeEditor from "./Editor";
// import { defaultCode, languages } from "../constants";
// import { Button } from "@chakra-ui/react";
// import { compile, showResult } from "@/utils/compile";

// export default function Landing() {
//   const [code, setCode] = useState(defaultCode);
//   const [language, setLanguage] = useState(languages[0]);

//   const handleClick = async () => {
//     console.log("reached here");

//     const data = {
//       language_id: language.id,
//       source_code: btoa(code),
//     };
//     const token = await compile(data);
//     console.log(token, "here");

//     const result = showResult(token);
//     console.log(result);
//   };

//   const onChange = () => {};
//   return (
//     <div className="flex flex-col">
//       <CodeEditor code={code} language={language.value} onChange={onChange} />
//       <Button onClick={handleClick}>Exec</Button>
//     </div>
//   );
// }

import { useState } from "react";
import CodeEditor from "./Editor";
import { defaultCode, languages } from "../constants";
import { Button } from "@chakra-ui/react";
import { compile, showResult } from "@/utils/compile";

export default function Landing() {
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState(languages[0]);
  const [output, setOutput] = useState(null);

  const handleClick = async () => {
    try {
      console.log("Compiling code...");

      const data = {
        language_id: language.id,
        source_code: btoa(code),
      };

      const token = await compile(data);
      console.log("Compilation token received:", token);

      const result = await showResult(token);
      setOutput(result);
      console.log("Execution result:", result);
    } catch (error) {
      console.error("Error during compilation or result fetching:", error);
    }
  };

  const onChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="flex ">
      <Button onClick={handleClick}>Exec</Button>

      <CodeEditor code={code} language={language.value} onChange={onChange} />
      {output && (
        <div>
          <h3>Output:</h3>
          <pre>{JSON.stringify(output, null, 2)}</pre>{" "}
        </div>
      )}
    </div>
  );
}
