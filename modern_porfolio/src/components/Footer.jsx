import React from 'react'
import { 
    Github, 
    Linkedin, 
    Mail, 
  } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-gray-300">© 2025 FKD - all rights reserved</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/kengnidoriane/" className="text-gray-300 hover:text-white transition-colors" target='_blank' rel='noopener no referrer'>
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer