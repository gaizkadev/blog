import Itxina from "../public/mountains.jpg";
import Image from "next/image";


export default function PhotoIntro() {
    return (
        <>
            <div className="flex mt-12 justify-center">
                <Image
                    className="justify-center rounded-xl"
                    src={Itxina}
                    alt="Itxina"
                    width={1280}
                    height={960}
                />
            </div>
            <p className="ml-20 mt-2">pie de foto</p>
        </>
    )
}