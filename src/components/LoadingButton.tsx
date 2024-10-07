import { Button } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

export default function LoadingButton() {
  return (
    <div>
      <Button
        isLoading
        colorScheme="blue"
        spinner={<BeatLoader size={8} color="black" />}
      >
        Click me
      </Button>
    </div>
  );
}
