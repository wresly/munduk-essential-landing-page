import Image from "next/image"
import Link from "next/link"
export default function Experiences() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-indigo-400">Experience & Service</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                    Making Your Time With Us Truly Special
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <div className="lg:min-h-80 min-h-50 relative group lg:row-span-2 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-tl-4xl bg-[url(/imgs/exp/restaurant.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 lg:rounded-tl-4xl transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Dining</p>
                                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-tl-4xl" />
                    </div>
                    {/* <div className="lg:min-h-80 min-h-50 relative group lg:row-start-1 lg:col-start-5 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-tr-4xl bg-[url(/imgs/exp/jeeptour.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 lg:rounded-tr-4xl transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="relative flex h-full flex-col overflow-hidden">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Jeep Tour</p>
                                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-tr-4xl" />
                    </div> */}
                    <div className="lg:min-h-80 min-h-50 relative group lg:row-start-1 lg:col-start-3 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 bg-[url(/imgs/exp/spa.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 transition-transform duration-700 ease-out group-hover:scale-105" />
                        <Link className="" href={"/experience#spa"}>
                            <div className="relative flex h-full flex-col overflow-hidden">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">SPA</p>
                                    <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                    </div>
                    <div className="lg:min-h-80 min-h-50 relative group lg:col-start-3 lg:row-start-2 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 bg-[url(/imgs/exp/yoga.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 transition-transform duration-700 ease-out group-hover:scale-105" />
                        <Link className="" href={"/experience#yoga-spiritual"}>
                            <div className="relative flex h-full flex-col lg:justify-end lg:pb-4">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Yoga & Spiritual</p>
                                    <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                    </div>
                    {/* <div className="lg:min-h-80 min-h-50 relative group lg:row-start-3 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-bl-4xl bg-[url(/imgs/exp/cookingclass.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 lg:rounded-bl-4xl transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="relative flex h-full flex-col lg:justify-end lg:pb-4">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Cooking Class</p>
                                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg lg:rounded-bl-4xl shadow-sm outline outline-white/15" />
                    </div> */}
                    {/* <div className="lg:min-h-80 min-h-50 relative group lg:row-start-3 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 bg-[url(/imgs/exp/spiritual.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="relative flex h-full flex-col lg:justify-end lg:pb-4">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">Spiritual</p>
                                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                </p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                    </div> */}
                    <div className="lg:min-h-80 min-h-50 relative group lg:row-span-2 lg:col-span-2">
                        <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-br-4xl bg-[url(/imgs/exp/trekking.jpg)] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 rounded-lg bg-black/50 lg:rounded-br-4xl transition-transform duration-700 ease-out group-hover:scale-105" />
                        <Link className="" href={"/experience#junggle-trekking"}>
                            <div className="relative flex h-full flex-col lg:justify-end lg:pb-4">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-white">Trekking</p>
                                    <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-lg text-sm/6 text-gray-400">
                                        Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-br-4xl" />
                    </div>
                </div>
            </div>
        </div >
    )
}
