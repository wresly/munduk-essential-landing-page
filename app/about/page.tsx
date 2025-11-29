import Footer from "../components/footer"
import Hero from "../components/hero"
import Image from "next/image"
export default function About() {
    return (
        <>
            <Hero background={"/imgs/about3.jpg"}>
                <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                </div>
            </Hero>
            <div className="m-20">
                <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:p-16">
                    <div className="col-span-1 font-playfair">
                        <h1 className="">About Us</h1>
                        <h1 className="font-bold text-4xl">
                            Essentially Munduk Bali
                        </h1>
                        <p className="font-cormorant mt-5">A locally treasured nature retreat in Bali, perfect for slowing down and reconnecting with the nature.</p>
                    </div>
                    <div className="col-span-2">
                        <h1 className="font-bold text-4xl">
                            Welcome to Essentially Munduk Bali
                            Your Divine Home for Transformation
                        </h1>
                        <p className="font-cormorant">
                            A sanctuary to transform, rediscover your true self, and cultivate awareness, health, and holistic balance through yoga and meditation. Pasraman Essentially Munduk is a place of inner growth and the evolution of the True Self.

                            Here, you are invited to walk a transformative path — exploring and understanding the essence of your true nature through deep yoga practice and soul-calming meditation. Through our life mastery approach, we gently guide you toward a deeper understanding of yourself and the meaning of life.

                            Our purpose is to support you in developing profound awareness, achieving balance, and embracing holistic well-being. Pasraman Essentially Munduk is where your personal transformation begins.

                        </p>
                    </div>

                </div>
                <div className="grid lg:grid-cols-4 gap-5">
                    <Image className="rounded-md" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
                    <Image className="rounded-md" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
                    <Image className="rounded-md" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
                    <Image className="rounded-md" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}