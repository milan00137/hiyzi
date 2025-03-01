import React from "react";
import CircleText from "./CircleText";
import { HiyziLogo } from "./HiyziLogo";

type Props = object;

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <HiyziLogo />
        <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
      <p className="text-center text-3xl pb-5 font-bold">
        To Hiya, my daughter and little magic—every bit of this is made with
        love! ❤️
      </p>
    </footer>
  );
}
