import About from "./components/about";
import DiscoverRegion from "./components/discover-region";
import Experiences from "./components/experiences";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Reviews from "./components/reviews";
import Rooms from "./components/rooms";

export default function Home() {
  return (
    <div>
      <HeroSection background={"/imgs/hero.jpeg"}>
        {/* <div className="h-[80vh] absolute inset-0 bg-black/0" /> */}
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className={"font-playfair text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"}>
              Essential Munduk Bali
            </h1>
            <p className={"font-cormorant mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8"}>
              Surrounded by forested hills and hidden waterfalls, find your peaceful escape
            </p>
          </div>
        </div>
      </HeroSection>
      <About />
      <Rooms />
      <DiscoverRegion />
      <Experiences />
      <Reviews />
      <Footer />
    </div>
  );
}
