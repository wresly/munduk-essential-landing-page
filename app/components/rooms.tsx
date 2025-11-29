import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"

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
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2 flex justify-center" >
                            <div className="w-full max-w-[500px]">
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
                        </CarouselItem>
                    ))
                    }
                </CarouselContent >
                <div className="flex justify-center items-center gap-4 mt-4">
                    <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                    <CarouselNext className="relative right-0 top-0 translate-y-0" />
                </div>
            </Carousel >
        </div>
    )
}