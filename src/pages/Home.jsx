import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "./../../src/assets/images/upc.jpg"

const navigation = [
    { name: 'Inscription', href: '#' },
]

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <div className="">
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="mx-auto max-w-7xl">
                        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                            <nav className="flex items-center justify-between" aria-label="Global">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt="UPC LOGO"
                                        className="h-8 w-auto"
                                        src={Logo}
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                {/* <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                            {item.name}
                                        </a>
                                    ))}
                                </div> */}
                            </nav>
                        </div>
                    </div>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>

                <div className="relative lg:h-screen">
                    <div className="mx-auto max-w-7xl h-auto">
                        <div className="relative z-10 lg:w-full lg:max-w-2xl">
                            <svg
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="0,0 90,0 50,100 0,100" />
                            </svg>

                            <div className="relative px-6 py-20 lg:py-44 lg:px-8 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Grâce à notre plateforme en ligne simplifiez votre inscription en quelques cliques
                                    </h1>
                                    <p className="mt-6 text-base leading-8 text-gray-600">
                                        Facilitez votre inscription à l'UPC grâce à notre plateforme en ligne conviviale. En quelques clics, accomplissez les formalités d'inscription et accédez rapidement aux opportunités d'apprentissage passionnantes offertes par notre université de premier plan. Simplifiez votre expérience d'inscription et rejoignez la communauté étudiante dynamique de l'UPC dès maintenant.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a
                                            href="/register"
                                            className="rounded-md bg-yellow-light px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-light"
                                        >
                                            S'inscrire
                                        </a>
                                        {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900 inline-flex justify-center items-center">
                                            Procédure <span aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                                                </svg>

                                            </span>
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mx-6 md:mx-0 hidden md:block">
                        <img
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                            src="https://img.freepik.com/free-photo/medium-shot-students-classroom_23-2148950533.jpg?t=st=1712667588~exp=1712671188~hmac=544f3f1c9b21b48e5100d50496dcc1bbc6a738d3d3e51be45c1596a0e9710d4a&w=996"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Comment ça marche ?</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Suivez les étapes ci-dessous pour envoyer votre TP</p>
                    </div>

                    <ul className="max-w-md mx-auto mt-16 space-y-12">
                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg className="w-10 h-10 text-yellow-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Créer un compte</h3>
                                <p className="mt-4 text-base text-gray-600">Si vous n'avez pas déjà un compte, vous pouvez en créer gratuitement et vous connecter grâce à votre matricule.</p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg className="w-10 h-10 text-yellow-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Sélectionner un cours</h3>
                                <p className="mt-4 text-base text-gray-600">Une fois connecté vous pouvez voir la liste de TP de votre promotion et envoyer votre résolution au professeur.</p>
                            </div>
                        </li>

                        <li className="relative flex items-start">
                            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-light">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-black">Notification</h3>
                                <p className="mt-4 text-base text-gray-600">Une fois le TP envoyé vous serez notifié dès que le résultat sera disponible.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section> */}
        </div>
    )
}
