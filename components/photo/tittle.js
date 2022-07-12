export default function Tittle() {
    return (
        <>
            <div className="px-4 py-16">
                <div className="w-full mx-auto text-center">
                    <h1 className="lg:text-8xl md:text-7xl sm:text-5xl font-bold text-gray-800">
                        Lorem ipsum dolor sit.
                    </h1>
                    <p className="lg:text-2xl md:text-lg sm:text-base font-bold text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
                    </p>
                </div>
            </div>
            <div
                data-aos="fade-in"
                data-aos-delay="300"
                className="border-black border-t border-solid text-center flex flex-wrap justify-around place-items-center items-center w-full max-w-4xl mt-5 pt-5 mx-auto aos-init aos-animate"
            >
                <div className="">
                    <p className="leading-4 ">
                        <span className="text-yellow-600 uppercase font-bold tracking-wider text-sm block mb-1 sm:mb-2">
                            Read time
                        </span>
                        <span className="block text-gray-800">4 min</span>
                    </p>
                </div>
                
                <div className="">
                    <p className="leading-4 ">
                        <span className="text-yellow-600 uppercase font-bold tracking-wider text-sm block mb-1 sm:mb-2">
                            Published
                        </span>
                        <span className="block text-gray-800">Apr 13, 2022</span>
                    </p>
                </div>
                <div className="">
                    <p className="leading-4">
                        <span className="text-yellow-600 uppercase font-bold tracking-wider text-sm block mb-1 sm:mb-2">
                            Author
                        </span>
                        <a
                            className="block text-normal text-gray-800"
                        >
                            Gaizka
                        </a>
                    </p>
                </div>
                <div className="">
                    <p className="leading-4">
                        <span className="text-yellow-600 uppercase font-bold tracking-wider text-sm block mb-1 sm:mb-2">
                            Photographer
                        </span>
                        <a
                            className="block text-normal text-gray-800"
                        >
                            Gaizka
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}