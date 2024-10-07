import { useState } from "react";
import CodeEditor from "./Editor";
import { defaultCode, languages } from "../app/constants";
import { Button } from "@chakra-ui/react";
import { compile, showResult } from "@/utils/compile";
import Output from "./Output";

export default function Landing() {
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState(languages[0]);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      console.log("Compiling code...");

      const data = {
        language_id: language.id,
        source_code: btoa(code),
      };

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
          setOutput(result);
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
    <div className="flex  justify-around mt-10">
      <CodeEditor code={code} language={language.value} onChange={onChange} />
      {/* {loading && <div>Still working on it...</div>} */}
      {/* {output && ( */}
      <div className="border border-black rounded-xl w-[400px]">
        <Output
          loading={loading}
          handleClick={handleClick}
          output={JSON.stringify(output, null, 2)}
        />
        {/* <pre>{JSON.stringify(output, null, 2)}</pre> */}
      </div>
      {/* )} */}
    </div>
  );
}
