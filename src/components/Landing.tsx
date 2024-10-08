import { useState } from "react";
import CodeEditor from "./Editor";
import { defaultCode, languages } from "../app/constants";
import { compile, showResult } from "@/utils/compile";
import Output from "./Output";
import DropDown from "./Dropdown";

export default function Landing() {
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState(languages[0]);
  const [output, setOutput] = useState<any>();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setOutput("");
    console.log(language, "is used");

    setLoading(true);
    try {
      console.log("Compiling code...");

      console.log(language.id, "id here");

      const data = {
        language_id: language.id,
        source_code: btoa(code),
      };
      console.log(data.language_id, "lang ids");

      const token = await compile(data);
      if (!token) {
        console.log("no token received");
        return;
      }
      const fetchResult = async () => {
        const result = await showResult(token);
        if (result.status_id === 1 || result.status_id === 2) {
          console.log("Still in queue or processing...");
          setTimeout(fetchResult, 2000);
        } else {
          console.log("Compilation completed:", result);
          setLoading(false);
          console.log(result.stdout);
          const decodedOutput = result?.stdout ? atob(result.stdout) : "";
          console.log(decodedOutput);

          setOutput(decodedOutput);
        }
      };

      fetchResult();

      console.log("Compilation token received:", token);
    } catch (error) {
      console.error("Error during compilation or result fetching:", error);
      setLoading(false);
    }
  };

  const onChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="lg:flex   justify-around mt-10">
      <DropDown setLanguage={setLanguage} />
      <CodeEditor
        code={code}
        setLanguage={setLanguage}
        language={language}
        onChange={onChange}
      />

      <div className="border border-black rounded-xl w-[400px]">
        <Output
          loading={loading}
          handleClick={handleClick}
          output={JSON.stringify(output)}
        />
      </div>
    </div>
  );
}
