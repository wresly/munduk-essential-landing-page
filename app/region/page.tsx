import Footer from "../components/footer";
import HeroSection from "../components/hero";
import Image from "next/image";
export default function Region() {
    return (
        <>
            <HeroSection background="/imgs/discover.jpg">
                <div></div>
            </HeroSection>
            <div className="m-20 grid lg:grid-cols-2 gap-20 ">
                <Image className="rounded-md h-[500px] w-[600px]" src={"/imgs/lake-forest.jpg"} width={500} height={500} alt="" />
                <div className="lg:p-16">
                    <div className="col-span-1 font-playfair mb-5">
                        <h1 className="font-bold text-4xl mb-1">
                            Lake & Forest Munduk
                        </h1>
                        {/* <p>A Conscious Culinary Experience in the Heart of Nature</p> */}
                    </div>
                    <div className="font-cormorant">
                        <p className="mb-2" >
                            Munduk is home to some of Bali's most enchanting natural landscaping, where the serene caldera lakes meet ancient tropical forest. The twin lakes – tamblingan and buyan rest quickly in the highland, often veiled in  the morning mist, creating a dream-like setting that involves reflection and awe. These sacred waters are surrounded by dense, unspoiled rainforest, alike with birdsong, fresh mountain air and the calming rhythm of nature.
                        </p>
                        <p>
                            Wandering through Munduk’s forest, you will find hidden waterfalls, moss – covered trees and peaceful traits that led to breathtaking view points, whether you are seeking solitude in spiration , or  deeper connection to the earth, lakes, and forest of munduk offers a sanctuary for the senses and the soul
                        </p>
                    </div>
                </div>
            </div>
            <div className="m-20 grid lg:grid-cols-2 gap-20 ">
                <Image className="rounded-md h-[500px] w-[600px] lg:col-start-2" src={"/imgs/climate1.jpg"} width={500} height={500} alt="" />
                <div className="lg:p-16 lg:col-start-1 lg:row-start-1">
                    <div className="col-span-1 font-playfair mb-5">
                        <h1 className="font-bold text-4xl mb-1">
                            Munduk climate
                        </h1>
                        {/* <p>A Conscious Culinary Experience in the Heart of Nature</p> */}
                    </div>
                    <div className="font-cormorant">
                        <p className="" >
                            Munduk’s cool, highland climate creates the perfect environment for rest and renewal. With fresh mountain air, mild temperature between 18 celsius to 26 celsius (64 fahrenheit to 79 fahrenheit) and misty mornings that give way to golden light, the atmosphere naturally invites stillness and presence.
                            Gentle rains nourish the lush forest, while the calm, refreshing breeze soothes the senses - making Munduk an ideal soothing for yoga, meditation, and deep restoration.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}