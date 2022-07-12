export default function BlockQuote() {
    return (
        <div className="container my-12 ml-24">
            <div className="grid grid-cols-12">
                <div
                    className="my-20 col-span-5 aos-init aos-animate ml-48"
                    data-aos="fade-in"
                    data-aos-delay="25"
                >
                    <div className="">
                        <blockquote className="relative">
                            <svg
                                className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-300"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <div className="relative z-10">
                                <p className="text-yellow-600 text-3xl leading-normal">
                                    I just wanted to say that I'm very happy with my purchase so
                                    far. The documentation is outstanding.
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>

                <div
                    className="my-3 col-span-4 col-start-8 aos-init aos-animate"
                    data-aos="fade-in"
                    data-aos-delay="50"
                >
                    <div className="text-gray-800">
                        <p className="font-semibold text-lg">
                            ‘Amira and I have seen both positivity and negativity attached
                            to our being here, in being outside and doing what we do,’ said
                            Aysha. ‘And that’s part of why we’re here today, because we
                            really wanted to share our experiences with the wider community,
                            to bring communities together in this place we call home. When
                            we sit here together, we’re sisters and brothers.’
                        </p>
                        <br />
                        <p className="font-semibold text-lg">
                            A low-level hike along the beck from Glenridding to the
                            Helvellyn viewpoint allowed for the group to talk and take in
                            the beauty of the surrounds at a gentle pace. The walk itself
                            was planned to incorporate a number of rest stops for those who
                            were fasting, and participants were encouraged to disconnect
                            from the outer world and to connect with their inner-selves with
                            group meditation and prayers for those who wished to do so.
                        </p>
                        <br />
                        <p className="font-semibold text-lg">
                            Whilst the idea of hiking on an empty stomach might seem like an
                            uncomfortable one, many Muslims find themselves able to overcome
                            their thirst and hunger through mindfulness and by focussing on
                            the higher purpose of their fasting.
                        </p>
                        <br />
                        <p className="font-semibold text-lg">
                            ‘It’s a little bit of&nbsp;<em>mind over matter</em>, because
                            you know why you’re doing it, because it’s prescribed by your
                            faith and you feel the blessings and the peace that this time
                            brings upon you. You can overcome that discomfort, and you come
                            out of it feeling purified and energised’, explains Aysha.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}