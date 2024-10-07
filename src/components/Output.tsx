// import { Button } from "@chakra-ui/react";
import DropDown from "./Dropdown";
import LoadingButton from "./LoadingButton";
import { Button } from "./ui/button";
export default function Output({ output, handleClick, loading }: any) {
  return (
    <div className="flex flex-col items-center">
      <div>Output</div>

      <div className="flex gap-6">
        <button
          onClick={handleClick}
          className="h-12 border-black border-2 p-2.5  bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
        >
          Execute
        </button>
      </div>

      {loading && (
        <div>
          <LoadingButton />
        </div>
      )}

      <div className="max-w-[100px]">{output && <h1>{output}</h1>}</div>
    </div>
  );
}
