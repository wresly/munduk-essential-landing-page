import Footer from "../components/footer";
import HeroSection from "../components/hero";

import Image from "next/image";
import { House, Bath, BedDouble } from "lucide-react";

export default function Accomodation() {
    return (
        <>
            <HeroSection background="/imgs/about1.jpg" >
                <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className={"font-playfair text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"}>
                            Accomodation
                        </h1>
                    </div>
                </div>
            </HeroSection>
            <div className="p-40 grid lg:grid-cols-2 gap-10" id="cottage">
                <Image className="h-[500px]" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
                {/* <h1 className="lg:col-span-1 font-playfair font-bold text-4xl">Relax in Spaces Made for You</h1> */}
                <div>
                    <h1 className="text-4xl mb-5 font-playfair font-bold">Cottage</h1>
                    <div className="mb-5 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <House className="size-6 text-indigo-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Room Area</p>

                                <p className="font-medium">1000 Sqm</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <Bath className="size-6 text-indigo-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Bathroom</p>

                                <p className="font-medium">1 Room</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <BedDouble className="size-6 text-indigo-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Bed</p>

                                <p className="font-medium">1 Queen Bed</p>
                            </div>
                        </div>
                    </div>
                    <p className="lg:col-span-2 font-cormorant">
                        Your cottage is gently tucked into the mountain slope, offering uninterrupted views of the mystical Bali highlands. A lush tropical pathway guides you to your private space, where vibrant gardens of flowers and native plants surround you in quiet seclusion.

                        Thoughtfully built using natural, locally sourced materials, each cottage opens onto a wide panorama of green valleys, rolling hills, and the distant outline of the Java Sea. The architecture blends seamlessly with the landscape, creating a calm and intimate retreat where nature is present at every moment.

                        This is a place to slow down, breathe deeply, and feel connected to the beauty of Bali’s untouched environment—right outside your door.
                    </p>
                </div>
            </div>
            <div className="p-40 grid lg:grid-cols-2 gap-10" id="standard">
                {/* <h1 className="lg:col-span-1 font-playfair font-bold text-4xl">Relax in Spaces Made for You</h1> */}
                <div>
                    <h1 className="text-4xl font-playfair font-bold mb-5">Standard Cottage</h1>
                    <div className="mb-5 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <House className="size-6 text-indigo-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Room Area</p>

                                <p className="font-medium">1000 Sqm</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <Bath className="size-6 text-indigo-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Bathroom</p>

                                <p className="font-medium">1 Room</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <BedDouble className="size-6 text-indigo-700" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Bed</p>

                                <p className="font-medium">1 Queen Bed</p>
                            </div>
                        </div>
                    </div>
                    <p className="lg:col-span-2 font-cormorant">
                        Our Standard Cottage offers a peaceful hideaway surrounded by gardens of flowers and indigenous plants. Set along a gentle tropical pathway, this cozy space is crafted from natural materials that reflect the beauty of its surroundings. Inside, you’ll find a warm and simple comfort, while outside, soft views of the valley and green hillside bring nature close to your doorstep. It’s an ideal choice for guests seeking a calm, nature-focused stay with all the essentials for a relaxing retreat.
                    </p>
                </div>
                <Image className="h-[500px]" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
            </div>
            {/* <div className="mb-20 px-16 w-full grid lg:grid-cols-2 gap-y-10">
                {Array.from({ length: 6 }).map((_, index) =>
                    <div key={index} className="w-full max-w-[500px] mx-auto">
                        <a href="#" className="block rounded-lg p-4 shadow-[0_0_15px_rgba(165,180,252,0.5)]">
                            <Image alt="" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" width={500} height={500} className="h-56 w-full rounded-md object-cover" />

                            <div className="mt-2">
                                <dl>
                                    <div>
                                        <dt className="sr-only">Price</dt>
                                        <dd className="text-sm text-gray-500">$240,000</dd>
                                    </div>

                                    <div>
                                        <dt className="sr-only">Room Name</dt>
                                        <dd className="font-medium">Deluxe Room</dd>
                                    </div>
                                </dl>

                                <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg className="size-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Parking</p>

                                            <p className="font-medium">2 spaces</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg className="size-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Bathroom</p>

                                            <p className="font-medium">2 rooms</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg className="size-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Bedroom</p>

                                            <p className="font-medium">4 rooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                )}
            </div> */}
            <Footer />
        </>
    )
}