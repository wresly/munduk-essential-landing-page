import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { House, Bath, BedDouble } from "lucide-react";
import Link from "next/link";

export default function Rooms() {
    return (
        <div className="w-full px-5 py-10 flex flex-col items-center">
            <h2 className="text-center text-base/7 font-semibold text-indigo-400">Accommodations</h2>
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                Relax in Spaces Made for You
            </h2>
            <Carousel
                opts={{ align: "center", loop: false }}
                className="w-full mx-auto grid-cols-2">
                <CarouselContent className="py-10 col-span-2">
                    <CarouselItem className="md:basis-1/1 lg:basis-1/2 flex justify-center" >
                        <div className="w-full max-w-[500px]">
                            <Link href="/accomodation#cottage" className="block rounded-lg p-4 shadow-[0_0_15px_rgba(165,180,252,0.5)]">
                                <Image alt="" src="/imgs/room.png" width={500} height={500} className="h-56 w-full rounded-md object-cover" />

                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">$240,000</dd>
                                        </div>

                                        <div>
                                            <dt className="sr-only">Room Name</dt>
                                            <dd className="font-medium">Cottage</dd>
                                        </div>
                                    </dl>

                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <House className="size-6 text-indigo-700" />
                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500">Room Area</p>

                                                <p className="font-medium">56 Sqm</p>
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
                                </div>
                            </Link>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/1 lg:basis-1/2 flex justify-center" >
                        <div className="w-full max-w-[500px]">
                            <Link href="/accomodation#standard" className="block rounded-lg p-4 shadow-[0_0_15px_rgba(165,180,252,0.5)]">
                                <Image alt="" src="/imgs/room.png" width={500} height={500} className="h-56 w-full rounded-md object-cover" />

                                <div className="mt-2">
                                    <dl>
                                        <div>
                                            <dt className="sr-only">Price</dt>
                                            <dd className="text-sm text-gray-500">$240,000</dd>
                                        </div>

                                        <div>
                                            <dt className="sr-only">Room Name</dt>
                                            <dd className="font-medium">Standar Cottage</dd>
                                        </div>
                                    </dl>

                                    <div className="mt-6 flex items-center gap-8 text-xs">
                                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                            <House className="size-6 text-indigo-700" />
                                            <div className="mt-1.5 sm:mt-0">
                                                <p className="text-gray-500">Room Area</p>

                                                <p className="font-medium">56 Sqm</p>
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
                                </div>
                            </Link>
                        </div>
                    </CarouselItem>
                </CarouselContent >
                <div className="flex justify-center items-center gap-4 mt-4">
                    <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                    <CarouselNext className="relative right-0 top-0 translate-y-0" />
                </div>
            </Carousel >
        </div>
    )
}