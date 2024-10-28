import React from 'react'

export default function WhyChooseUs() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://aurelius.net/wp-content/uploads/2023/09/Blog-Banner-for-Website-Content-1-e1693884146247-1024x806.png"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-200">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Why Choose Us?
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                                esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                                architecto eius quis quibusdam fugiat dicta.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                Contact NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
