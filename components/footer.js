import Container from "./container";
import Image from "next/image";
import Html from '../public/assets/icons/html.png'
import Css from '../public/assets/icons/css.png'
import React from '../public/assets/icons/react.png'
import Next from '../public/assets/icons/next.png'
import Svelte from '../public/assets/icons/svelte.png'
import Github from '../public/assets/icons/github.png'



export default function Footer() {
  return (
    <Container>
      <footer className=" border-t-2 border-gray-800">
        <div className="py-8 flex items-center sm:justify-center">
          <span>
            <Image
              src={Html}
              alt="Html 5"
              width={32}
              height={32}
            />
          </span>
          <span>
            <Image
              src={Css}
              alt=" Css 3"
              width={32}
              height={32}
            />
          </span>
          <span>
            <Image
              src={React}
              alt=" React Js"
              width={32}
              height={32}
            />
          </span>
          <span>
            <Image
              src={Next}
              alt="Next Js"
              width={32}
              height={32}
            />
          </span>
          <span>
            <Image
              src={Svelte}
              alt="Svelte"
              width={32}
              height={32}
            />
          </span>
          <span>
            <Image
              src={Github}
              alt="Github"
              width={32}
              height={32}
            />
          </span>
        </div>

      </footer >
    </Container>

  );
}
