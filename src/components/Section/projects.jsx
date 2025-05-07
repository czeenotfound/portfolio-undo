import React from 'react'

import project1 from '../../assets/projects/collaboralearn.png'
import project2 from '../../assets/projects/se-ocr.png'
import project3 from '../../assets/projects/coffeetearia.png'
import project4 from '../../assets/projects/jobcompass.png'
import project5 from '../../assets/projects/todolist.png'
import project6 from '../../assets/projects/pokedex.png'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "CollaboraLearn",
            description: "Is a web-based collaborative learning platform built with PHP that allows users to create, join, and manage learning rooms.",
            image: project1,
            repoLink: "https://github.com/czeenotfound/CollaboraLearn_app"
        },
        {
            id: 2,
            title: "OCR-Library Attendance System",
            description: "Is a software solution developed by SURV Co. that uses Optical Character Recognition (OCR) technology to automate library attendance tracking.",
            image: project2,
            repoLink: "https://github.com/czeenotfound/ocr-las",
        },
        {
            id: 3,
            title: "CoffeeTearia",
            description: "An e-commerce platform dedicated to coffee supplies, designed to streamline product browsing, ordering, and inventory management for both customers and administrators.",
            image: project3,
            repoLink: "https://github.com/czeenotfound/CoffeeTeariaEcommerce",
        },
        {
            id: 4,
            title: "JobCompass - Capstone Project",
            description: "Is a web application designed to help job seekers find suitable employment opportunities using advanced matching algorithms that connects job seekers with employers. ",
            image: project4,
            repoLink: "https://github.com/czeenotfound/Jobcompass_CapstoneProject",
            liveLink: "https://jobcompass-app.onrender.com/"
        },
        {
            id: 5,
            title: "To-do List App",
            description: "An e-commerce application with shopping cart functionality, user authentication, and payment integration using React, Node.js, and MongoDB.",
            image: project5,
            repoLink: "https://github.com/czeenotfound/todolist_react",
            liveLink: "https://todo-list-gr15.netlify.app/"
        },
        {
            id: 6,
            title: "Pokedex App",
            description: "An e-commerce application with shopping cart functionality, user authentication, and payment integration using React, Node.js, and MongoDB.",
            image: project6,
            repoLink: "https://github.com/czeenotfound/pokedex_app",
            liveLink: "https://pokedex-gr15.netlify.app/"
        }
    ];

    return (
        <div className="project min-h-screen flex items-center justify-center py-20 px-4 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[url('assets/project1gradient.svg')] bg-center bg-no-repeat bg-[length:1900px_auto]"></div>
            
            <div className="container mx-auto relative z-10">
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 md:mb-16">My Projects</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {projects.map(project => (
                        <div 
                            key={project.id} 
                            className="bg-black/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden h-60">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-gray-300 mb-6">{project.description}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-auto">
                                    <a 
                                        href={project.repoLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md transition duration-300 text-center"
                                    >
                                        <span className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                            GitHub Repo
                                        </span>
                                    </a>
                                    {project.liveLink ? (
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-md transition duration-300 text-center"
                                        >
                                            <span className="flex items-center justify-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Demo
                                            </span>
                                        </a>
                                    ) : (
                                        <span className="bg-gray-500 text-white py-3 px-6 rounded-md text-center cursor-not-allowed">
                                            No Demo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 