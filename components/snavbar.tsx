import Link from "next/link";
import React from "react";

export const SubNavbar = () => {
  return (
    <nav className=" p-4 ">
      <div className="">
        <h1 className="text-4xl">Staylist</h1>
        <p>An online music catalogue by music lovers. Sharing since 2025.</p>
        <Link href="/">
          <p className="underline hover:no-underline hover:cursor-pointer">
            Return to catalogue &gt;
          </p>
        </Link>
      </div>
    </nav>
  );
};
