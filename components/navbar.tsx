import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-red-500 flex justify-between p-4 items-start">
      <div className="bg-yellow-500">
        <h1 className="text-4xl">Staylist</h1>
        <p>An online music catalogue by music lovers. Sharing since 2025.</p>
        <Link href="/about-staylist">
          <p className="underline hover:no-underline hover:cursor-pointer">
            Read more &gt;{" "}
          </p>
        </Link>
      </div>
      <div className="">
        <Link href="/recommend-a-song">
          <Button className="bg-white text-black hover:bg-gray-200">
            Recommend a song
          </Button>
        </Link>
      </div>
    </nav>
  );
};
