"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="overflow-hidden mb-1">
      <div className="flex items-center justify-center w-72 h-14 border rounded-lg">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <h1 className="font-bold tracking-wider text-3xl">Genius Talkes</h1>
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
