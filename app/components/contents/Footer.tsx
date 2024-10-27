import React from "react";

export default function Footer() {
  return (
    <>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>

        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>

        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://codepen.io/yourusername"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="CodePen (opens in a new tab)"
            title="CodePen"
          >
            <span className="sr-only">CodePen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                strokeWidth="5"
              ></path>
            </svg>
          </a>
        </li>

        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
            title="Instagram"
          >
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.5c17.64-6.88,44.08-15.1,92.81-17.38,52.69-2.5,68.5-3.06,202-3.35s149.26.31,202,2.62c48.72,2.08,75.23,10.21,92.85,17,23.37,9,40,19.85,57.57,37.29s28.38,34.11,37.52,57.5c6.88,17.66,15.1,44.08,17.38,92.83,2.46,52.69,3,68.5,3.28,202s-.21,149.26-2.53,202c-2.1,48.72-10.21,75.23-17,92.86-9,23.35-19.83,40-37.29,57.57s-34.11,28.37-57.5,37.5c-17.67,6.88-44.09,15.11-92.83,17.38-52.68,2.5-68.51,3-202,3.28s-149.28-.22-202-2.53m215.89-701.14c-125.92,0-228.31,102.38-228.31,228.3s102.39,228.31,228.31,228.31,228.3-102.38,228.3-228.3S642.93,208.7,516.11,208.7M841,165.33A53.17,53.17,0,1,0,894.12,218.5,53.16,53.16,0,0,0,841,165.33M516.11,361a142.61,142.61,0,1,1-142.6,142.6A142.62,142.62,0,0,1,516.11,361Z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}
