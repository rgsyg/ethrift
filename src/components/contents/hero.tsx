import Image from "next/image";
import heroImage from "./images/hero.jpg";

export default function Hero() {
  return (
    <>
      <Image
        src={heroImage}
        alt="Hero banner image"
        className="h-96 object-cover"
      />
    </>
  );
}
