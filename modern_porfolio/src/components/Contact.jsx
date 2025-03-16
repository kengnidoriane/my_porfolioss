import React, { useState} from 'react'
import { Button } from "./ui/button";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [isLoading, setIsLoading] = useState(false);
      const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
          await emailjs.send(
              emailjsServiceId,
              emailjsTemplateId,
              {
                  from_name: formData.name,
                  from_email: formData.email,
                  message: formData.message,
                  to_name: 'doriane Kengni',
              },
              emailjsPublicKey
          );

          toast.success('Message envoyé avec succès!');
          setFormData({ name: '', email: '', message: '' });
      } catch (error) {
          toast.error('Erreur lors de l\'envoi du message.');
          console.error('Error:', error);
      } finally {
          setIsLoading(false);
      }
        console.log('Form submitted:', formData);
      };
    
      return (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? 'Sending in progress...': 'Send the message'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      );
}

export default Contact