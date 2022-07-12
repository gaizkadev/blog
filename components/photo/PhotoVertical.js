export default function PhotoVertical() {
    return (
        <>
            <div className=" inset-y-0 w-full md:w-2/5 lg:w-2/4 md:h-full left:0 aos-init aos-animate" data-aos="fade-right" >
                <div className="md:absolute inset-0 mask-right ">
                    <Image
                        className="justify-center"
                        src={ItxinaV}
                        alt="Itxina"
                        layout="intrinsic"
                    />{" "}
                </div>
            </div>

            <div className="container  bg-red-200">
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-4 col-start-10">
                        <div className="pl-14 py-10">
                            <div
                                data-aos="fade-in"
                                data-aos-delay="200"
                                className="text-grey-dark aos-init aos-animate"
                            >
                                <p className="font-semibold text-lg">
                                    In the death zone, your body starts eating itself. Time and
                                    space disappear. It’s impossible to remember what happens up
                                    there.
                                </p>
                                <br />
                                <p className="font-semibold text-lg">
                                    Whilst essentially a ghost story of sorts, the narrative more
                                    than touches upon the stark reality of mortality on the
                                    world’s highest and most dangerous mountains, acknowledging
                                    the uncomfortable truth of the hundreds of irretrievable
                                    bodies that are permanent fixtures on Peaks such as Everest .
                                </p>
                                <br />
                                <p className="font-semibold text-lg">
                                    Despite its unsettling storyline, the performance is
                                    punctuated with humour and music too, and the uncomplicated
                                    scenery of towering white peaks that adorn the stage will have
                                    you hankering for your own adventure from the opening lines to
                                    the curtain call.
                                </p>
                                <br />
                                <p className="font-semibold text-lg">
                                    Despite its unsettling storyline, the performance is
                                    punctuated with humour and music too, and the uncomplicated
                                    scenery of towering white peaks that adorn the stage will have
                                    you hankering for your own adventure from the opening lines to
                                    the curtain call.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}