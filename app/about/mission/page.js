import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/public/images/next_img1.jpg";

export default function Mission() {
  return (
    <main className="mt-10">
      <div className="">Mission</div>

      <div>
        Eos lorem dolor voluptua tempor ea sea erat sit sea et. Gubergren kasd
        amet voluptua et sanctus sit no eirmod erat. Et gubergren lorem diam et
        voluptua eos et takimata.
      </div>

      <Image src={thumb} alt="Thumb Image" />

      <Button />
    </main>
  );
}
