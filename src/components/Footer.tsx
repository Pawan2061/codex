import { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="text-cente flex justify-between mx-auto mt-16 max-w-[800px]  border border-t-0 border-r-0 border-l-0 border-b-8">
      <h1>&lt;&gt;</h1>
      <h1 className="text-blue-500" suppressHydrationWarning>
        {currentTime.toLocaleTimeString()}
      </h1>{" "}
      <h1>&lt;/&gt;</h1>
    </div>
  );
}
