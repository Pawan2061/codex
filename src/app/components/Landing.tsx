import { useState } from "react";
import CodeEditor from "./Editor";
import { defaultCode, languages } from "../constants";
import { Button } from "@chakra-ui/react";
import { compile, showResult } from "@/utils/compile";

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
      console.log("Compilation token received:", token);

      const fetchResult = async () => {
        const result = await showResult(token);
        if (result.status_id === 1 || result.status_id === 2) {
          console.log("Still in queue or processing...");
          // Recheck after 2 seconds
          setTimeout(fetchResult, 2000);
        } else {
          console.log("Compilation completed:", result);
          setLoading(false);
          setOutput(result); // Set the output once the process is done
        }
      };

      fetchResult(); // Call the fetchResult function to start checking the status
    } catch (error) {
      console.error("Error during compilation or result fetching:", error);
      setLoading(false); // Stop loading if there's an error
    }
  };

  const onChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="flex flex-col">
      <CodeEditor code={code} language={language.value} onChange={onChange} />
      <Button onClick={handleClick}>Exec</Button>
      <h3>Output:</h3>
      {loading && <div>Still working on it...</div>}
      {output && (
        <div>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
