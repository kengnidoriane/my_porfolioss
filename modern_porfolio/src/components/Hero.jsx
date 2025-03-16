import React from 'react'
import TypewriterText from './TypewriterText'
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-20 relative overflow-hidden">
      {/* Formes géométriques décoratives */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute right-48 top-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute right-24 top-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Formes géométriques solides */}
      <div className="absolute right-20 top-32 w-20 h-20 bg-blue-200 rounded-lg transform rotate-45"></div>
      <div className="absolute right-48 bottom-32 w-16 h-16 bg-purple-200 rounded-full"></div>
      <div className="absolute right-96 top-48 w-24 h-24 border-4 border-pink-200 transform rotate-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-2xl md:text-4xl text-gray-900 mb-2">Hello I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kengni Doriane
          </h1>
          <h4 className="text-xl md:text-5xl font-bold text-blue-600 mb-6">
            <TypewriterText text="Web Developer" />
          </h4>
          <p className="text-xl text-gray-600 mb-8">
            Transforming Ideas into Powerful Digital Solutions
          </p>
          <div className="flex space-x-4">
            <a href="#projects">
              <Button className="bg-blue-600 hover:bg-blue-700">
                See my projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">
                Get in touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero