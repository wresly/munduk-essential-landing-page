'use client'

// react 
import { useState } from 'react'

// headlessui
import { Dialog, DialogPanel } from '@headlessui/react'

// hero icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// next js
import Image from 'next/image'
import Link from 'next/link'


const navigation = [
    { name: 'Home', href: '/' },
    // { name: 'About', href: '/about' },
    { name: 'Acommodation', href: '/accomodation' },
    { name: 'Discover Region', href: '/region' },
    { name: 'Dining', href: '/dining' },
    { name: 'Experiences', href: '/experience' },
    { name: 'Event & Collaboration', href: '/special-event' },
]

export default function HeroSection({ children, background }: { children: React.ReactNode, background: string }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-900 h-[80vh]">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-16">
                    <div className="lg:flex-1">
                        <Link href="#" className="m-1.5 p-1.5 flex gap-2 items-center">
                            <Image
                                width={500}
                                height={500}
                                alt=""
                                src="/logo.png"
                                className="h-15 w-auto"
                            />
                            <span className="font-playfair text-white">Essential Munduk Bali</span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className={"font-cormorant hidden lg:flex lg:gap-x-5"}>
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className={"font-cormorant hidden lg:flex lg:flex-1 lg:justify-end"}>
                        <a
                            href="#"
                            className="rounded-4xl border-2 border-white px-3.5 py-2.5 text-sm font-extrabold text-white shadow-xs hover:bg-black"
                        >
                            Book Now
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <Image
                                    width={500}
                                    height={500}
                                    alt=""
                                    src="/logo.png"
                                    className="h-8 w-auto"
                                />
                                <span className={"font-playfair text-white"}>Essential Munduk Bali</span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={"font-cormorant mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className={"font-cormorant py-6"}>
                                    <a
                                        href="#"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="h-[80vh] px-6 pt-14 lg:px-8 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url("${background}")` }}>
                <div className="h-[80vh] absolute inset-0 bg-black/50" />
                {children}
            </div>
        </div>
    )
}
