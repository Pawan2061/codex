export default function Navbar() {
  return (
    <div className="relative flex flex-col">
      <div className="h-[30px]  bg-slate-300  hover:bg-slate-400 duration-75 ">
        <a
          href="https://github.com/Pawan2061/codex"
          title="Fork me on GitHub"
          className="absolute top-0 right-0 github-corner"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 250 250"
            className="relative z-20 h-20 w-20"
          >
            <title>Fork me on GitHub</title>
            <path d="M0 0h250v250"></path>
            <path
              d="M127.4 110c-14.6-9.2-9.4-19.5-9.4-19.5 3-7 1.5-11 1.5-11-1-6.2 3-2 3-2 4 4.7 2 11 2 11-2.2 10.4 5 14.8 9 16.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 110px" }}
              className="octo-arm"
            ></path>

            <path
              d="M113.2 114.3s3.6 1.6 4.7.6l15-13.7c3-2.4 6-3 8.2-2.7-8-11.2-14-25 3-41 4.7-4.4 10.6-6.4 16.2-6.4.6-1.6 3.6-7.3 11.8-10.7 0 0 4.5 2.7 6.8 16.5 4.3 2.7 8.3 6 12 9.8 3.3 3.5 6.7 8 8.6 12.3 14 3 16.8 8 16.8 8-3.4 8-9.4 11-11.4 11 0 5.8-2.3 11-7.5 15.5-16.4 16-30 9-40 .2 0 3-1 7-5.2 11l-13.3 11c-1 1 .5 5.3.8 5z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>
      </div>
      <main className="relative  flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
          <div className="text-center">
            <div className="font-normal text-xl md:text-xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              Trusted by the most innovative minds in{" "}
              <span className="text-blue-500 inline-flex flex-col">
                <ul className="block text-left leading-tight [&_li]:block">
                  <h1 className="hover:text-indigo-600">Code</h1>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </main>{" "}
    </div>
  );
}
