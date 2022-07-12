import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Container from '../components/container';

export const Alert = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <Container>
            <nav
                className="
                    flex 
                    p-4 
                    border-b-2
                    border-gray-800 
                    items-center"
            >
                <a href="/" className="flex">
                    <Image src="/logo.svg" width={28} height={28}></Image>
                    <span
                        className="
                            text-base
                            sm:text-sm
                            font-bold 
                            ml-2 
                            text-gray-800"
                    >
                        gaizka | Frontend Developer
                    </span>
                </a>

                <button
                    className="
                p-3 
                lg:hidden 
                ml-auto 
                outline-none 
                mr-0 
                items-center"
                    onClick={handleClick}
                >
                    <svg
                        className="w-14 h-14"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeWidth={1} d="M4 8h26M10 14h26M4" />
                    </svg>
                </button>
                <div
                    className={`${active ? "" : "hidden"
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto ml-auto`}
                >
                    <div
                        className="
                items-center 
                lg:inline-flex 
                lg:flex-row 
                lg:ml-auto 
                lg:w-auto 
                w-full 
                flex 
                flex-col 
                lg:h-auto
                border-gray-900"
                    >
                        <Link href="/photo">
                            <a
                                className=" 
                link-underline 
                link-underline-black
                text-sm
                w-full 
                px-3 
                py-2 
                text-gray-500 
                items-center 
                justify-center 
                uppercase"
                            >
                                stories
                            </a>
                        </Link>
                        <Link href="/art">
                            <a
                                className="
                link-underline 
                link-underline-black
                text-sm 
                w-full 
                px-3 
                py-2 
                text-gray-500 
                items-center 
                justify-center 
                uppercase"
                            >
                                art
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </Container>
    );
};
