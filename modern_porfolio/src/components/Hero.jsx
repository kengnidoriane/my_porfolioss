import React from 'react'
import TypewriterText from './TypewriterText'
import { Button } from "./ui/button";


const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl">
        <p>Hello I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Kengni Doriane
        </h1>
        <h4 className="text-xl md:text-6xl font-bold text-gray-800 mb-6">
          <TypewriterText text="Web Developer" />
        </h4>
        <p className="text-xl text-gray-600 mb-8">
        Transforming Ideas into Powerful Digital Solutions
        </p>
        <div className="flex space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            see my projets
          </Button>
          <Button variant="outline">
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero