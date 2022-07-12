import Itxina from "../public/mountains.jpg";
import Image from "next/image";


export default function DoublePhoto() {
    return (
        <>
            <div className="grid grid-cols-2 gap-0 my-4">
                <div>
                    <Image
                        className="justify-center"
                        src={Itxina}
                        alt="Itxina"
                        layout="intrinsic"
                    />
                    <p className="ml-4">pie de foto</p>
                </div>
                <div>
                    <Image
                        className="justify-center"
                        src={Itxina}
                        alt="Itxina"
                        layout="intrinsic"
                    />
                    <p className="ml-4">pie de foto</p>
                </div>
            </div>
        </>
    )
}