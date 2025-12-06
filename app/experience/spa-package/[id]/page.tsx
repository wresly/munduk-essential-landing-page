import { notFound } from "next/navigation";
import Footer from "../../../components/footer"
import Hero from "../../../components/hero"
import Image from "next/image"
export default async function About({ params }: { params: { id: string } }) {
    const dataYogaMeditation = [
        {
            id: "1",
            name: "Gumi Ayu SPA Sanctuary",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Spa sanctuary is a spa package designed to provide a deeply relaxing and rejuvenating experience. It begins with a 10-15-minute aromatherapy floral foot bath, where you can soak your feet in warm water infused with aromatic flowers and essential oils, offering a soothing sensation and promoting relaxation.",
                "Following the foot bath, you’ll indulge in a luxurious 1-hour full body massage. Our skilled therapists will use a combination of gentle strokes, firm pressure, and aromatic oils to release tension from your muscles, promote circulation, and leave you feeling completely refreshed and revitalized.",
                "To conclude this indulgent experience, you’ll enjoy a 1-hour relaxing traditional Balinese facial. This facial treatment is designed to cleanse, exfoliate, and nourish your skin using traditional Balinese techniques and natural ingredients. It includes gentle massage movements to promote lymphatic drainage and relaxation, leaving your skin glowing and your mind serene. Overall, the gumi ayu spa sanctuary package offers a comprehensive pampering experience, combining the therapeutic benefits of aromatherapy, massage, and facial treatments to promote physical and mental well-being, leaving you feeling deeply relaxed, rejuvenated, and pampered.",
            ],
            hasHighlight: true,
            highlight: [
                "Warm Face Towel",
                "Aromatherapy Floral Foot Bath",
                "Spa Sanctuary",
                "Costumized Massage / Balinese Massage",
                "Traditional Facial",
                "Refreshment Drink",
            ],
        },
        {
            id: "2",
            name: "Gumi Ayu SPA Escape",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Spa escape is a luxurious spa package meticulously crafted to provide an unparalleled experience of relaxation and rejuvenation. It begins with a 10-15-minute aromatherapy floral foot bath, where you’ll immerse your feet in warm water infused with aromatic flowers and essential oils. This step aims to soothe tired feet, promote relaxation, and prepare your body for the indulgent treatments to follow.",
                "Following the foot bath, you’ll indulge 1-hour full body massage, performed by our skilled therapists. During the massage, you’ll experience a combination of gentle strokes, firm pressure, and aromatherapy oils tailored to your preferences, aimed at releasing tension, improving circulation, and inducing deep relaxation.",
                "Next, you’ll have the option to choose a 50-minute body scrub from our selection of premium scrubs. Whether you prefer a gentle exfoliation or a more invigorating scrub, each treatment will leave your skin feeling smooth, revitalized, and deeply nourished.",
                "After the body scrub, you’ll luxuriate in an aromatherapy floral bath, where you’ll soak in a tub filled with warm water infused with fragrant flowers and essential oils. This aromatic bath will further enhance your relaxation experience, soothing your senses and leaving you feeling refreshed and rejuvenated.",
                "To conclude this indulgent journey, your skin will be moisturized with a rich and hydrating body moisturizer, leaving your skin soft, supple, and glowing with health.",
                "The gumi ayu spa escape package is designed to provide a complete sensory experience, combining the therapeutic benefits of aromatherapy, massage, exfoliation, and hydration to promote physical and mental well-being, leaving you feeling deeply relaxed, revitalized, and pampered from head to toe.",
            ],
            hasHighlight: true,
            highlight: [
                "Warm Face Towel",
                "Aromatherapy Floral Foot Bath",
                "Spa Escape",
                "Body Scrub",
                "Costumized Message / Balinese Massage",
                "Refreshment Drink",
            ],
        },
        {
            id: "3",
            name: "Asian Discovery",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Spa asian discovery is Indulge in a luxurious spa experience starting with a 10-15 minute aromatherapy floral foot bath, where your feet are immersed in warm water infused with aromatic essentialsoils such as lavender ,peppermint or eucalyptus aimed at providing relaxation and mood enhancement through the inhalation of natural fragrances.",
                "Follow this with your choice of either a Balinese head massage or Balinese foot massage for one hour. The Balinese massage techniques, originating from Bali, Indonesia, involve applying firm pressure along the body’s energy lines to promote relaxation and balance. The head massage focuses on the scalp, neck, and shoulders, while the foot massage targets the feet and lower legs, both aiming to relieve tension and improve circulation.",
                "Conclude your spa session with a body scrub of your choice to remove dead skin cells, leaving your skin smooth and revitalized. This is followed by a refreshing shower to cleanse the skin, and the application of a nourishing body moisturizer to hydrate and soften your skin, ensuring you feel completely relaxed and rejuvenated.",
            ],
            hasHighlight: true,
            highlight: [
                "Warm Face Towel",
                "Aromatherapy Floral Foot Bath",
                "Spa asian discovery",
                "Costumized Massage / Balinese Massage",
                "Body Scrub",
                "Refreshment Drink",
            ],
        },
    ]
    const { id } = await params;
    const data = dataYogaMeditation.find(dataTemp => dataTemp.id === id);

    if (!data) {
        // Handle the case where no matching item is found
        notFound()
        // or: notFound(); // for Next.js App Router
    }
    return (
        <>
            <Hero background={"/imgs/about3.jpg"}>
                <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                </div>
            </Hero>
            <div className="m-20">
                <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:p-16">
                    <div className="col-span-1 font-playfair">
                        <h1 className="font-bold text-4xl">
                            {data.name}
                        </h1>
                        <p className="font-cormorant text-3xl mt-5">{data.price}</p>
                    </div>
                    <div className="col-span-2 font-cormorant">
                        {data.desc.map((des, index) =>
                            <p key={index} className="mt-3">
                                {des}
                            </p>
                        )}
                        {data.hasHighlight ? (
                            <>
                                <p className="mt-10 text-1xl font-bold">Highlight:</p>
                                <ul className="ml-5 list-disc">
                                    {data.highlight.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        ) : null}

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