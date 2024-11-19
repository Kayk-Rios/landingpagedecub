import Image from "next/image";
import Decub from "@/assets/logoDecub.png";
export default function Logo() {
  return (
    <div className="mr-[200px] ">
      <a href="/">
        <Image
          src={Decub}
          width={50}
          height={50}
          alt="logo"
        />
      </a>
    </div>
  );
}
