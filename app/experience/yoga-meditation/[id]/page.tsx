import { notFound } from "next/navigation";
import Footer from "../../../components/footer"
import Hero from "../../../components/hero"
import Image from "next/image"
export default async function About({ params }: { params: { id: string } }) {
    const dataYogaMeditation = [
        {
            id: "1",
            name: "Sunrise Yoga",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Our Sunrise Yoga program is open to the public and takes place in the peaceful energy of the early morning. In this session, participants are invited to welcome the new day through a guided yoga practice led by the Pasraman Essentially Munduk team.",
                "With the support of our yogis, you will explore a series of movements and postures designed to enhance health, vitality, and overall well-being. The practice helps awaken the body, calm the mind, and nurture a deeper connection with yourself.",
                "Sunrise Yoga offers a moment of harmony — a balanced experience of physical and mental clarity while embracing the beauty of the morning before beginning the day’s activities.",
            ],
            hasHighlight: false,
            highlight: [],
        },
        {
            id: "2",
            name: "Healing Yoga",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Healing Yoga is specially designed to release exhaustion and emotional burdens connected to past karmic experiences, while guiding you toward a profound spiritual awakening through the sacred practice of yoga.",
                "This retreat also serves as a space to support healing from any physical or emotional conditions you may be experiencing in the present moment. To receive the deepest benefits, it is essential to enter this process with sincerity, openness, and surrender — offering this precious time to the Divine with love and compassion for yourself, for you carry great worth.",
                "Throughout the retreat, you are invited to cultivate presence in each moment and to use a journal as a tool for reflection. Write down your gratitude, the lessons you discover, and any positive messages or insights that arise during your healing journey.",
                "Healing Yoga is a sacred opportunity to return to your essence, restore balance, and reconnect with the light within.",
            ],
            hasHighlight: false,
            highlight: [],
        },
        {
            id: "3",
            name: "Mindfulness Meditation",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Our Mindfulness Meditation program is open to the public and held in the peaceful atmosphere of the late afternoon at Essentially Munduk. In this session, participants are invited to explore meditation practices together in a serene and nurturing environment.",
                "Guided by our Yogi Team, you will learn techniques that support inner peace, reduce stress, and enhance overall well-being. This program provides a gentle space to pause at the end of the day — to reflect, reconnect with yourself, and cultivate a deeper connection to your inner self.",
                "Mindfulness Meditation is an invitation to slow down, breathe, and return to the present moment with clarity and ease.",
            ],
            hasHighlight: false,
            highlight: [],
        },
        {
            id: "4",
            name: "Ceremony Retreat",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "The Ceremony Retreat is a one-day program designed to guide you into a deeper understanding of yourself. It offers a sacred space to release fear, worry, stress, depression, feelings of hopelessness, and confusion that may have accumulated throughout your life. Through this retreat, participants are invited to rediscover inner peace and reconnect with a deeper sense of purpose and meaning.",
                "This program is offered exclusively on Tilem (New Moon) and Purnama (Full Moon). These sacred days are believed to be moments when Hyang Maha Kuasa— the Divine—manifests powerful energies of purification, renewal, and energetic recycling. It is a time when the universe naturally supports the cleansing of energies that no longer serve us.",
                "The Ceremony Retreat is an opportunity to realign your spirit, purify your inner world, and welcome new clarity into your life.",
            ],
            hasHighlight: false,
            highlight: [],
        },
        {
            id: "5",
            name: "Surya Namaskar Retreat",
            price: "Rp. 200.000",
            image: "/imgs/exp/yoga.jpg",
            desc: [
                "Release work-related stress and fatigue in a short yet meaningful experience. The Surya Namaskar Retreat is the ideal solution for those with busy schedules who still wish to maintain balance and harmony in life.",
                "This three-hour retreat includes a series of practices such as karmic alignment meditation, Bali Hatha Yoga, Pranayama, and is completed with Sacred Sound Healing for deep relaxation and energetic healing.",
                "The Surya Namaskar Retreat offers a refreshing pause — a moment to nourish your body, mind, and spirit amidst the demands of daily life.",
            ],
            hasHighlight: true,
            highlight: ["Meditasi Penyelarasan Karma", "Bali Hatha Yoga", "Pranayama", "Coffee/Tea break", "Sacred Sound Healing"],
        },
    ]
    // let data: { id: string, name: string, price: string, image: string, desc: string[], hasHighlight: boolean, highlight: string[] };
    // dataYogaMeditation.forEach(dataTemp => {
    //     if (dataTemp.id === params.id) {
    //         data = dataTemp;
    //     }
    // });
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