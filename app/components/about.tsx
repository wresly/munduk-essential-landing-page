import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function About() {
    return (
        <>
            <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-15 lg:py-50 mx-auto">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10 lg:h-[500px]">
                            {/* <div className="col-span-3">
                                <Image className="rounded-xl" width={500} height={500} src="/imgs/about1.jpg" alt="Features Image" />
                            </div> */}

                            <div className="col-span-5">
                                <Image className="rounded-xl" width={500} height={500} src="/imgs/about2.jpg" alt="Features Image" />
                            </div>

                            <div className="col-span-7">
                                <Image className="rounded-xl" width={500} height={500} src="/imgs/waterfall.jpg" alt="Features Image" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="text-base/7 font-semibold text-indigo-400">About Us</h2>
                                <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                    Munduk Essential Bali
                                </h2>
                                <p className="font-cormorant text-gray-500 dark:text-neutral-400">
                                    A sanctuary to transform, rediscover your true self, and cultivate awareness, health, and holistic balance through yoga and meditation. Pasraman Essentially Munduk is a place of inner growth and the evolution of the True Self. Here, you are invited to walk a transformative path — exploring and understanding the essence of your true nature through deep yoga practice and soul-calming meditation. Through our life mastery approach, we gently guide you toward a deeper understanding of yourself and the meaning of life. Our purpose is to support you in developing profound awareness, achieving balance, and embracing holistic well-being. Pasraman Essentially Munduk is where your personal transformation begins.
                                </p>
                                <Button className="mt-5">
                                    <Link href={"/about"}>Learn More</Link>
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}