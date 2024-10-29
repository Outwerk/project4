import React, { useEffect, useState } from 'react'
import { IoHome } from "react-icons/io5";

export default function Services() {
    const [element, setElement] = useState([])

    // creating Elements
    const loanServices = [
        {
            icon: <IoHome />,
            title: "Accountand",
            text: "Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <IoHome />,
            title: "Accountand",
            text: "Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <IoHome />,
            title: "Accountand",
            text: "Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <IoHome />,
            title: "Accountand",
            text: "Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <IoHome />,
            title: "Accountand",
            text: "Lorem ipsum dolor sit amet consectetur."
        },
        {
            icon: <IoHome />,
            title: "Accountand",
            text: "Lorem ipsum dolor sit amet consectetur."
        },
    ]


    return (
        <div>

            <section>
                <div className="lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">

                        <div className="mx-auto max-w-xl  lg:mx-0  lg:py-24 lg:pe-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>

                            <p className="mt-4 text-gray-800 ">
                                Our loan services prioritize your financial well-being. We provide quick approvals, flexible repayment options, and transparent terms, making the borrowing process straightforward and stress-free. Count on us to support you in reaching your financial objectives with confidence.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                Contact NOW
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 ">
                            {loanServices.map((service, index) => (
                                <a
                                    key={index}
                                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                        {service.icon}
                                    </span>

                                    <h2 className="mt-2 font-bold">{service.title}</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                        {service.text}
                                    </p>
                                </a>
                            ))}



                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
