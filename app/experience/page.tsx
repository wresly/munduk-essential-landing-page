import HeroSection from "../components/hero";
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "../components/footer";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Experience() {
    const dataSPA = [
        {
            name: "Traditional Balinese Massage",
            price: "200.000",
            desc: "A timeless healing therapy using long, flowing strokes, acupressure, and gentle stretching to release tension and restore full-body harmony.",
            image: "/imgs/exp/spa.jpg",
        },
        {
            name: "Jamu Herbal Compress",
            price: "200.000",
            desc: "Warm herbal pouches infused with aromatic spices melt away stress, stimulate circulation, and soothe tired muscles.",
            image: "/imgs/exp/spa.jpg",
        },
        {
            name: "Munduk Deep Relaxation Ritual",
            price: "200.000",
            desc: "A grounding full-body experience combining massage, herbal oils, and gentle energy balancing for complete relaxation.",
            image: "/imgs/exp/spa.jpg",
        },
        {
            name: "Revitalizing Spice Scrub",
            price: "200.000",
            desc: "A natural exfoliation blend of turmeric, cinnamon, and rice powder leaves your skin soft, bright, and renewed.",
            image: "/imgs/exp/spa.jpg",
        },
        {
            name: "Flower Bath Experience",
            price: "200.000",
            desc: "A calming ritual with fresh local flowers and warm water to soothe the senses and lift the spirit.",
            image: "/imgs/exp/spa.jpg",
        },
        {
            name: "Custumize Massage",
            price: "200.000",
            desc: "Wether you seek relies for over exerted muscle, or simply want to let your mind and body escape realty your Gumi Ayu SPA technician will customize a massage using specialty products and techniques essential to ultimate relaxation and rejuvenation  Based on your particular areas of focus, your massage therapist may borrow from a variety of methods including  shiatsu, swedish, deep tissue and reflexology",
            image: "/imgs/exp/spa.jpg",
        },
    ]

    const dataSPAPackages = [
        {
            name: "Gumi Ayu SPA Sanctuary",
            price: "200.000",
            image: "/imgs/exp/spa.jpg",
            path: "experience/spa-package/1",
        },
        {
            name: "Gumi Ayu SPA Escape",
            price: "200.000",
            image: "/imgs/exp/spa.jpg",
            path: "experience/spa-package/2",
        },
        {
            name: "Asian Discovery",
            price: "200.000",
            image: "/imgs/exp/spa.jpg",
            path: "experience/spa-package/3",
        }
    ]

    const dataYoga = [
        {
            id: "1",
            name: "Sunrise Yoga",
            price: "200.000",
            image: "/imgs/exp/yoga.jpg",
        },
        {
            id: "2",
            name: "Healing Yoga",
            price: "200.000",
            image: "/imgs/exp/yoga.jpg",
        },
        {
            id: "3",
            name: "Mindfulness Meditation",
            price: "200.000",
            image: "/imgs/mindfullness-meditation.jpg",
        },
        {
            id: "4",
            name: "Ceremony Retreat",
            price: "200.000",
            image: "/imgs/exp/yoga.jpg",
        },
        {
            id: "5",
            name: "Surya Namaskar Retreat",
            price: "200.000",
            image: "/imgs/exp/yoga.jpg",
        },
    ]

    const dataTrekking = [
        {
            name: "Banyumala Waterfall",
            price: "200.000",
            path: "",
            image: "/imgs/exp/trekking.jpg",
        },
        {
            name: "Twin Waterfall",
            price: "200.000",
            path: "",
            image: "/imgs/exp/trekking.jpg",
        },
        {
            name: "Sunrise",
            price: "200.000",
            path: "",
            image: "/imgs/exp/trekking.jpg",
        },
    ]

    return (
        <>
            <HeroSection background="/imgs/about2.jpg">
                <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className={"font-playfair text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"}>
                            Experience & Service
                        </h1>
                    </div>
                </div>
            </HeroSection>
            {/* SPA Section */}
            <div className="lg:m-20 m-10" id="spa">
                <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:p-16">
                    <div className="col-span-1 font-playfair">
                        <h1 className="font-bold text-4xl">
                            Essentially Munduk SPA
                        </h1>
                        <p className="font-cormorant mt-5">Where Indonesian Healing Traditions Meet Natural Serenity</p>
                    </div>
                    <div className="mt-7 col-span-2 flex flex-col gap-5 font-cormorant">
                        <p>
                            Nestled in the heart of the Tamblingan-Munduk region, a place whose name comes from (Tamblingan) “Tamba Eling”, meaning “remember the medicine,” Essentially Munduk Spas invites you to slow down and reconnect with the restorative energy of nature. Here, traditional healing, natural ingredients, and mindful relaxation come together in harmony.
                        </p>
                        <div>
                            <p>
                                The Essence of Jamu Traditions
                            </p>
                            <p>
                                For generations, Indonesians have relied on Jamu—a holistic herbal wellness system—to nurture vitality, balance, and inner well-being. At Essentially Munduk Spas, we honor this heritage by blending time-tested remedies with modern spa techniques to create deeply rejuvenating treatments.

                                Each experience is enriched with natural ingredients sourced from local farmers, including ginger, turmeric, lemongrass, coconut, and mountain herbs known for their healing properties.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10 flex flex-col items-center">
                    <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                        Our Signature Treatments
                    </h2>
                    <div>
                        {/* <div className="grid grid-cols-2">
                            {dataSPA.map((data, index) => (
                                <div key={index} className="rounded-lg bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{data.name}</h5>
                                    <p className="text-body">{data.desc}</p>
                                </div>
                            ))}
                        </div> */}

                        <p className="mt-5 text-2xl">
                            Traditional Balinese Massage
                        </p>
                        <p>
                            A timeless healing therapy using long, flowing strokes, acupressure, and gentle stretching to release tension and restore full-body harmony.
                        </p>
                        <p className="mt-5 text-2xl">
                            Jamu Herbal Compress
                        </p>
                        <p>
                            Warm herbal pouches infused with aromatic spices melt away stress, stimulate circulation, and soothe tired muscles.
                        </p>
                        <p className="mt-5 text-2xl">Munduk Deep Relaxation Ritual</p>
                        <p>A grounding full-body experience combining massage, herbal oils, and gentle energy balancing for complete relaxation.</p>
                        <p className="mt-5 text-2xl">Revitalizing Spice Scrub</p>
                        <p>A natural exfoliation blend of turmeric, cinnamon, and rice powder leaves your skin soft, bright, and renewed.
                        </p>
                        <p className="mt-5 text-2xl">Flower Bath Experience</p>
                        <p>A calming ritual with fresh local flowers and warm water to soothe the senses and lift the spirit.
                        </p>
                        <p className="mt-5 text-2xl">Custumize Massage</p>
                        <p>Whether you seek relies for over exerted muscle, or simply want to let your mind and body escape realty your Gumi Ayu SPA technician will customize a massage using specialty products and techniques essential to ultimate relaxation and rejuvenation based on your particular areas of focus, your massage therapist may borrow from a variety of methods including  shiatsu, swedish, deep tissue and reflexology
                        </p>
                    </div>
                    <div className="w-full lg:m-20 m-10" id="yoga-spiritual">
                        <div className="w-full lg:px-5 py-10 flex flex-col items-center">
                            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                                SPA Packages
                            </h2>
                            <Carousel
                                opts={{ align: "center", loop: false }}
                                className="w-full mx-auto grid-cols-2">
                                <CarouselContent className="py-10 col-span-2">
                                    {dataSPAPackages.map((spa, index) => (
                                        <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3 flex justify-center" >
                                            <div className="w-full max-w-[500px]">
                                                <Image alt="" src={spa.image} width={500} height={500} className="h-56 w-full rounded-md object-cover object-center" />

                                                <div className="mt-2 flex justify-between">
                                                    <div>
                                                        <div>
                                                            <p className="sr-only">SPA Package Name</p>
                                                            <p className="font-medium">{spa.name}</p>
                                                        </div>
                                                        <div>
                                                            <p className="sr-only">Price</p>
                                                            <p className="text-sm text-gray-500">$240,000</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Button>
                                                            <Link href={spa.path}>Learn More</Link>
                                                        </Button>
                                                    </div>
                                                </div>
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
                        </div >
                    </div >
                    {/* <Carousel
                        opts={{ align: "center", loop: false }}
                        className="w-full mx-auto grid-cols-2">
                        <CarouselContent className="py-10 col-span-2">
                            {dataSPA.map((spa, index) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3 flex justify-center" >
                                    <div className="w-full max-w-[500px]">
                                        <Link href="#" className="block rounded-lg p-4 shadow-[0_0_15px_rgba(165,180,252,0.5)]">
                                            <Image alt="" src={spa.image} width={500} height={500} className="h-56 w-full rounded-md object-cover object-center" />

                                            <div className="mt-2 flex justify-between">
                                                <div>
                                                    <div>
                                                        <p className="sr-only">SPA Package Name</p>
                                                        <p className="font-medium">{spa.name}</p>
                                                    </div>
                                                    <div>
                                                        <p className="sr-only">Price</p>
                                                        <p className="text-sm text-gray-500">$240,000</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Button>Learn More</Button>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    A timeless healing therapy using long, flowing strokes, acupressure, and gentle stretching to release tension and restore full-body harmony.
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </CarouselItem>
                            ))
                            }
                        </CarouselContent >
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
                            <CarouselNext className="relative right-0 top-0 translate-y-0" />
                        </div>
                    </Carousel > */}
                </div >
            </div >
            <div className="lg:m-20 m-10">
                <p className="text-2xl">A Sanctuary Surrounded by Nature</p>
                <p>Designed to blend seamlessly with the surrounding jungle, our open, nature-inspired spa spaces offer a serene escape. The sound of flowing water, cool mountain air, and lush greenery create an atmosphere of pure tranquility — an ideal setting for personal renewal.</p>
                <p className="text-3xl">Why Choose Essentially Munduk Spas</p>
                <ul className="list-disc ml-5">
                    <li>Rooted in authentic Indonesian healing traditions</li>
                    <li>Natural and locally sourced ingredients</li>
                    <li>Skilled and caring therapists</li>
                    <li>A peaceful environment in the Tamblingan–Munduk highlands</li>
                    <li>Holistic treatments that rejuvenate body and mind</li>
                </ul>
            </div>
            {/* Yoga Section */}
            <div className="lg:m-20 m-10" id="yoga-spiritual">
                <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:p-16">
                    <div className="col-span-1 font-playfair">
                        <h1 className="font-bold text-4xl">
                            Essentially Munduk Yoga & Spiritual
                        </h1>
                        <p className="font-cormorant mt-5">Where Indonesian Healing Traditions Meet Natural Serenity</p>
                    </div>
                    <div className="mt-7 col-span-2 flex flex-col gap-5 font-cormorant">
                        <p>
                            Nestled in the heart of the Tamblingan-Munduk region, a place whose name comes from “Tamba Eling,” meaning “remember the medicine,” Essentially Munduk Spas invites you to slow down and reconnect with the restorative energy of nature. Here, traditional healing, natural ingredients, and mindful relaxation come together in harmony.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:px-5 py-10 flex flex-col items-center">
                    <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                        Yoga & Meditation Packages
                    </h2>
                    <Carousel
                        opts={{ align: "center", loop: false }}
                        className="w-full mx-auto grid-cols-2">
                        <CarouselContent className="py-10 col-span-2">
                            {dataYoga.map((yoga, index) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3 flex justify-center" >
                                    <div className="w-full max-w-[500px]">
                                        <Image alt="" src={yoga.image} width={500} height={500} className="h-56 w-full rounded-md object-cover object-center" />

                                        <div className="mt-2 flex justify-between">
                                            <div>
                                                <div>
                                                    <p className="sr-only">Yoga Package Name</p>
                                                    <p className="font-medium">{yoga.name}</p>
                                                </div>
                                                <div>
                                                    <p className="sr-only">Price</p>
                                                    <p className="text-sm text-gray-500">$240,000</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button>
                                                    <Link href={`/experience/yoga-meditation/${yoga.id}`}>Learn More</Link>
                                                </Button>
                                            </div>
                                        </div>
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
                </div >
            </div >
            {/* Trekking Section */}
            <div className="lg:m-20 m-10" id="jungle-trekking">
                <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:p-16">
                    <div className="col-span-1 font-playfair">
                        <h2 className="text-base/7 font-semibold text-indigo-400">Trekking</h2>
                        <h1 className="font-bold text-4xl">
                            Jungle Trekking
                        </h1>
                        <p className="font-cormorant mt-5">Where Indonesian Healing Traditions Meet Natural Serenity</p>
                    </div>
                    <div className="mt-7 col-span-2 flex flex-col gap-5 font-cormorant">
                        <p>
                            Nestled in the heart of the Tamblingan-Munduk region, a place whose name comes from “Tamba Eling,” meaning “remember the medicine,” Essentially Munduk Spas invites you to slow down and reconnect with the restorative energy of nature. Here, traditional healing, natural ingredients, and mindful relaxation come together in harmony.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:px-5 py-10 flex flex-col items-center">
                    <h2 className="text-center text-base/7 font-semibold text-indigo-400">Trekking Packages</h2>
                    <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                        Jungle Trekking Packages
                    </h2>
                    <Carousel
                        opts={{ align: "center", loop: false }}
                        className="w-full mx-auto grid-cols-2">
                        <CarouselContent className="py-10 col-span-2">
                            {dataTrekking.map((trekking, index) => (
                                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3 flex justify-center" >
                                    <div className="w-full max-w-[500px]">
                                        <Link href="#" className="block rounded-lg p-4 shadow-[0_0_15px_rgba(165,180,252,0.5)]">
                                            <Image alt="" src={trekking.image} width={500} height={500} className="h-56 w-full rounded-md object-cover object-center" />

                                            <div className="mt-2 flex justify-between">
                                                <div>
                                                    <div>
                                                        <p className="sr-only">Trekking Package Name</p>
                                                        <p className="font-medium">{trekking.name}</p>
                                                    </div>
                                                    <div>
                                                        <p className="sr-only">Price</p>
                                                        <p className="text-sm text-gray-500">$240,000</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Button>Learn More</Button>
                                                </div>
                                            </div>
                                        </Link>
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
                </div >
            </div >
            <div className="lg:m-20 m-10 grid lg:grid-cols-2 gap-20 ">
                <Image className="rounded-md h-[500px] w-[600px]" src={"/imgs/cookingclass.jpg"} width={500} height={500} alt="" />
                <div className="lg:p-16">
                    <div className="col-span-1 font-playfair mb-10">
                        <h1 className="font-bold text-4xl mb-1">
                            Cooking Class
                        </h1>
                        <p>Authentic  farm to table Experience</p>
                    </div>
                    <div className="font-cormorant">
                        <p>
                            Join us for a hands-on cooking session using the freshest organic ingredients - many harvested directly from our own Munduk farm before you begin cooking. Take a gentle walk through our grounds to discover the herbs, spices , and vegetables that form the essence of balinese cuisine.
                        </p>
                        <p>
                            Guided by our local chef to discover generations of family recipes and learn the rich culinary traditions that inspire our kitchen.
                        </p>
                        <p>
                            From the famous sate lilit (minced meat satay) to the savory lawar (a mixture of vegetable and meat) our balinese cooking class will teach you, how to balance the core flavors - sweet, savory, spicy, salty and sour - to create food that is not only delicious but also deeply rooted in the islands culinary.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}