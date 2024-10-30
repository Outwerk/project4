import React from 'react'
import Form from './Form'

export default function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-10 lg:gap-44 2xl:gap-72 mt-20 ">

    <div className="hero-content ms-5 sm:ms-0 lg:mt-20">
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold">Connect With Your Money World!</h1>
        <p className="py-6 text-2xl font-semibold">
        Our tailored small business loans empower you to achieve financial independence while driving the growth of your enterprise.
        </p>
        <button className="btn btn-primary p-3 px-5 rounded-3xl border border-black hover:bg-black hover:text-white">Get Started</button>
      </div>
    </div>

    <div>
      <Form/>
    </div>
  </div>
  )
}
