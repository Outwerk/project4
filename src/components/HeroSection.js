import React from 'react'
import Form from './Form'

export default function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-72 mt-20 ">

    <div className="hero-content md:mt-20">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold">Connect Your Money World!</h1>
        <p className="py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cum id a suscipit hic tenetur placeat dignissimos. Assumenda voluptas necessitatibus, obcaecati libero quas ea! Mollitia molestiae eveniet dicta velit vitae!
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
