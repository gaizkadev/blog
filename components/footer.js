import Container from "./container";
import Image from "next/image";
import Html from "../public/assets/icons/html.png";
import Css from "../public/assets/icons/css.png";
import React from "../public/assets/icons/react.png";
import Next from "../public/assets/icons/next.png";
import Svelte from "../public/assets/icons/svelte.png";
import Github from "../public/assets/icons/github.png";
import Hearth from "../public/assets/icons/hearth.png";

export default function Footer() {
  return (
    <Container>
      <footer className=" border-t-2 border-gray-800 flex items-center justify-between">
        <div className="py-4 flex items-center">
          <span className='hover:-translate-y-1 hover:scale-105'>
            <Image src={Html} alt="Html 5" width={24} height={24} />
          </span>
          <span className='hover:-translate-y-1 hover:scale-105'>
            <Image src={Css} alt=" Css 3" width={24} height={24} />
          </span>
          <span className='hover:-translate-y-1 hover:scale-105'>
            <Image src={React} alt=" React Js" width={24} height={24} />
          </span>
          <span className='hover:-translate-y-1 hover:scale-105'>
            <Image src={Next} alt="Next Js" width={24} height={24} />
          </span>
          <span className='hover:-translate-y-1 hover:scale-105'>
            <Image src={Svelte} alt="Svelte" width={24} height={24} />
          </span>
          <span className='hover:-translate-y-1 hover:scale-105'>
            <Image src={Github} alt="Github" width={24} height={24} />
          </span>
        </div>
        <div className="flex items-center">
          <p className="text-xs">
            coded with &nbsp;
            <Image src={Hearth} alt="Black Hearth" width={10} height={10} />
            &nbsp; by gaizka
          </p>
        </div>
      </footer>
    </Container>
  );
}
