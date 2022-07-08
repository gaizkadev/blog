import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-gray-800">
            <span>
              <Image
                src="/assets/logos/html.png"
                alt="Html 5"
                width={32}
                height={32}
              />
            </span>
            <span>
              <Image
                src="/assets/logos/css.png"
                alt=" Css 3"
                width={32}
                height={32}
              />
            </span>
            <span>
              <Image
                src="/assets/logos/react.png"
                alt=" React Js"
                width={32}
                height={32}
              />
            </span>
            <span>
              <Image
                src="/assets/logos/next.png"
                alt="Next Js"
                width={32}
                height={32}
              />
            </span>
            <span>
              <Image
                src="/assets/logos/svelte.png"
                alt="Svelte"
                width={32}
                height={32}
              />
            </span>
          </h3>

          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2 text-gray-800">
            
            <a
              href={`https://github.com/gaizkadev`}
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
