import { languages } from "@/app/constants";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const DropDown = ({ setLanguage }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-32 rounded-xl justify-center gap-x-1.5 bg-[#B8FF9F] hover:bg-[#99fc77] px-3 py-2 border-black border-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            Languages
            <svg
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-40 absolute right-0 z-10 mt-2 origin-top-right bg-white focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] border-black border-2 divide-y divide-black ${
            !open ? "hidden" : ""
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {languages.map((language) => (
            <div key={language.id} role="none">
              <Button
                onClick={() => {
                  console.log(language.value);

                  setLanguage(language);

                  setOpen(!open);
                }}
                className="block w-full px-4 py-2 text-sm border-black border-b-2 hover:bg-[#B8FF9F] hover:font-medium"
                role="menuitem"
                id="menu-item-0"
              >
                {language.value}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
