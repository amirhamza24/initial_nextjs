// "use client";

import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/public/images/first.jpg";

export default function Mission() {
  return (
    <main className="mt-10">
      <div className="">Mission</div>

      <div>
        Lorem dolor voluptua consectetur tempor ea sea erat sit sea et.
        Gubergren kasd amet voluptua et sanctus sit no eirmod erat. Et gubergren
        lorem diam et voluptua eos et takimata.
      </div>

      <div className="w-[400px] ">
        <Image placeholder="blur" src={thumb} alt="Thumb Image" />
      </div>

      <Button />
    </main>
  );
}
