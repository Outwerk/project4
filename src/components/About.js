import React from 'react'

export default function About() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">About</h2>
                                <div className="seprator"></div>

                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, molestiae exercitationem. Illo vitae necessitatibus inventore! Velit vitae illo nisi corrupti ipsam dolor voluptatibus eos porro, ab nostrum ea neque dolorem.
                                </p>
                            </header>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                Contact NOW
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-cIdPgKL4eEYyk15qEHOHSnI_k9TRXn5Lg&s"
                                        alt=""
                                        className="aspect-square w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Home Loan
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">Details</p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="group block">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdy2QctWZa9OmxW08BmLosq8nEcbDwfNHw0g&s"
                                        alt=""
                                        className="aspect-square w-full rounded object-cover"
                                    />

                                    <div className="mt-3">
                                        <h3
                                            className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Construction Loan
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">details</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
