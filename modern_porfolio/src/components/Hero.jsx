import React from 'react'
import TypewriterText from './TypewriterText'
import { Button } from "./ui/button";


const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white pt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          <TypewriterText text="Développeuse Full Stack" />
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Spécialisée en développement front-end avec React et back-end avec Node.js.
          Je crée des expériences web modernes et performantes.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Voir mes projets
          </Button>
          <Button variant="outline">
            Me contacter
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero