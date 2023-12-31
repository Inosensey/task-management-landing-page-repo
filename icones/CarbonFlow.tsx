import React, { SVGProps } from "react";

export function CarbonFlow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#00ADB5"
        d="M27 22.14V17a2 2 0 0 0-2-2h-8V9.86a4 4 0 1 0-2 0V15H7a2 2 0 0 0-2 2v5.14a4 4 0 1 0 2 0V17h18v5.14a4 4 0 1 0 2 0ZM8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2Zm6-20a2 2 0 1 1 2 2a2 2 0 0 1-2-2Zm12 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
      ></path>
    </svg>
  );
}
export default CarbonFlow;
