import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID, 
            EMAILJS_CONFIG.TEMPLATE_ID, 
            form.current, 
            EMAILJS_CONFIG.PUBLIC_KEY
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setStatus('success');
            setLoading(false);

            setFormData({
                from_name: '',
                reply_to: '',
                subject: '',
                message: ''
            });
            
            setTimeout(() => {
                setStatus(null);
            }, 5000);
        })
        .catch((error) => {
            console.error('Failed to send email:', error.text);
            setStatus('error');
            setLoading(false);

            setTimeout(() => {
                setStatus(null);
            }, 5000);
        });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/czeenotfound',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/khllnd/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            )
        }
    ];

    return (
        <div className="contact min-h-screen flex items-center justify-center py-20 px-4 relative">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-16 text-center">Contact Me</h1>
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:shadow-blue-500/10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
                        
                        {status === 'success' && (
                            <div className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-4 rounded-lg mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Your message has been sent successfully!
                            </div>
                        )}
                        
                        {status === 'error' && (
                            <div className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-4 rounded-lg mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Failed to send your message. Please try again later.
                            </div>
                        )}
                        
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="from_name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                                <input 
                                    type="text" 
                                    id="from_name" 
                                    name="from_name" 
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-white"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="reply_to" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                                <input 
                                    type="email" 
                                    id="reply_to" 
                                    name="reply_to" 
                                    value={formData.reply_to}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-white"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-white"
                                    required
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-white resize-none"
                                    required
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className={`w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition duration-300 font-medium flex items-center justify-center group ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </div>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50 transform transition-all duration-300 hover:shadow-blue-500/10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
                        
                        
                        <div>
                            <h4 className="font-medium text-white mb-6">Connect with me</h4>
                            <div className="flex space-x-5">
                                {socialLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 text-gray-400 hover:text-blue-400 p-3 rounded-lg transition-all duration-300 hover:bg-gray-700"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-12">
                            <div className="relative h-100 overflow-hidden rounded-lg">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329890.4950925884!2d121.83910138714545!3d7.162259125941532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32506a09d96fc175%3A0x35526ebbce01e7a2!2sZamboanga!5e1!3m2!1sen!2sph!4v1746385651695!5m2!1sen!2sph"
                                    width="100%" 
                                    height="100%" 
                                    style={{border: 0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                    title="Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 