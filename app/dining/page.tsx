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
            <div className="m-20 grid lg:grid-cols-2 gap-20 ">
                <Image className="rounded-md h-[500px] w-[600px]" src={"/imgs/about1.jpg"} width={500} height={500} alt="" />
                <div className="lg:px-16">
                    <div className="col-span-1 font-playfair mb-5">
                        <h1 className="font-bold text-4xl mb-1">
                            Gumi Plant-Based Restaurant
                        </h1>
                        <p>A Conscious Culinary Experience in the Heart of Nature</p>
                    </div>
                    <div className="font-cormorant">
                        <p className="mb-2" >
                            Gumi Plant-Based Restaurant offers a fresh, wholesome, and sustainable dining experience inspired by the natural beauty of Munduk. As global awareness of eco-friendly living continues to grow, our restaurant embraces this vision — serving nourishing plant-based dishes crafted with care, using ingredients sourced from our own permaculture garden and local farmers.
                        </p>
                        <p className="mb-2">
                            Set on the gentle slopes of the mountains within the Essentially Munduk grounds, Gumi welcomes you into a peaceful sanctuary surrounded by tree-lined pathways and lush greenery. The warm, earthy interior reflects our philosophy of harmony with nature, creating a comforting space where guests can relax and reconnect.

                        </p>
                        <p>
                            Whether you have spent the morning exploring the valley or simply wish to enjoy a mindful meal, Gumi Plant-Based Restaurant invites you to slow down, savor vibrant flavors, and experience the true essence of conscious dining in Bali.</p>
                    </div>
                </div>
            </div>
            <div className="m-20 grid lg:grid-cols-2 gap-20 ">
                <div className="lg:px-16">
                    <div className="col-span-1 font-playfair">
                        <h1 className="font-bold text-4xl mb-10">
                            Permaculture Garden
                        </h1>
                    </div>
                    <div className="font-cormorant">
                        <p className="mb-1">
                            Replicating the Natural Ecosystem Just across the riverbank from the dining area lies our vibrant Permaculture Garden. Designed to follow the natural systems of the forest, this garden uses permaculture principles to replicate and honor the balance of nature.
                        </p>
                        <p className="mb-1">
                            Here, plants grow in harmony — supporting one another, enriching the soil, and creating a sustainable ecosystem that provides fresh, nourishing ingredients for our kitchen. Our garden is not only a source of food, but also a living example of regenerative agriculture and our commitment to environmental stewardship.
                        </p>
                        <p className="mb-1">A sanctuary where naturally cultivated plants are grown with care and harvested by hand, our garden celebrates the pure life force found in petals, leaves, bark, roots, seeds, nuts, and fruits.</p>
                        <p className="mb-1">Guided by the Balinese philosophy of Tri Hita Karana, we exist to honor traditional agricultural wisdom while embracing sustainable technologies. This is a place where Balinese and people from around the world come together, united by a shared love for the earth and a commitment to responsible stewardship. Here, we learn how to live more sustainably—finding harmony with nature and harmony within our community.</p>
                        <p className="mb-1">Our permaculture approach supports both agriculture and local social economy. We work with nature, not against it—observing plants, animals, and natural systems so each element can serve multiple functions. Water resources are cared for thoughtfully to ensure long-term sustainability.</p>
                        <p className="mb-1">Through organic gardening, growing healthy foods, and creating spaces to share knowledge, we aim to bring people closer to the natural world. For the local community, this work carries deep meaning: it supports education, economic opportunity, conservation, and spiritual wellbeing.
                        </p>
                        <p>Welcome to a garden that grows more than food—it grows connection, resilience, and a shared future rooted in nature.</p>
                    </div>
                </div>
                <Image className="rounded-md lg:col-start-2 row-start-1 h-[500px] w-[600px]" src={"/imgs/permaculture-garden.jpg"} width={500} height={500} alt="" />
            </div>
            <div className="m-20 grid lg:grid-cols-2 gap-20 ">
                <Image className="rounded-md h-[500px] w-[600px]" src={"/imgs/exp/cookingclass.jpg"} width={500} height={500} alt="" />
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