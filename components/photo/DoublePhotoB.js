import Itxina from "../public/mountains.jpg";
import Image from "next/image";


export default function DoublePhotoB() {
    return (
        <div className="container my-12 ml-24">
            <div className="grid grid-cols-12 gap-8 grid-gallery">
                <div
                    className="col-span-12 sm:col-span-6 aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-delay="50"
                >
                    <a
                        title="Ramadan - a time to connect."
                        href="https://www.base-mag.com/wp-content/uploads/2022/04/IMG_0322-1024x683.jpg"
                        className="block group md:550 lg:h-700 mask-right "
                    >
                        <Image
                            className="justify-center"
                            src={Itxina}
                            alt="Itxina"
                            layout="intrinsic"
                        />
                    </a>
                    <p className="caption-text m-0 pt-3">
                        Ramadan – a time to connect.
                    </p>
                </div>

                <div
                    className="col-span-12 sm:col-span-6 aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-delay="100"
                >
                    <a
                        title="Preparing for prayer."
                        href="https://www.base-mag.com/wp-content/uploads/2022/04/IMG_0284-3-1024x691.jpg"
                        className="block group
								md:450 lg:h-550 sm:mt-10								  mask-bottom"
                    >
                        <Image
                            className="justify-center"
                            src={Itxina}
                            alt="Itxina"
                            layout="intrinsic"
                        />
                    </a>
                    <p className="caption-text m-0 pt-3">Preparing for prayer.</p>
                </div>
            </div>
        </div>
    )
}