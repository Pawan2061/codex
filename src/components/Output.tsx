// import { Button } from "@chakra-ui/react";
import LoadingButton from "./LoadingButton";
import { Button } from "./ui/button";

export default function Output({ output, handleClick, loading }: any) {
  return (
    <div className="flex flex-col items-center">
      <div>Output</div>
      <div className="flex  gap-56">
        <div>1</div>
        <div>2</div>
      </div>
      <Button onClick={handleClick}>Exec</Button>

      {loading && (
        <div>
          <LoadingButton />
        </div>
      )}
    </div>
  );
}
