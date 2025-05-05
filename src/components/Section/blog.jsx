import React from 'react'
import { Link } from 'react-router-dom'
import day1_2 from '../../assets/blogs/day1/day1-2.jpg'
import day1_3 from '../../assets/blogs/day1/day1-3.jpg'
import day1_4 from '../../assets/blogs/day1/day1-4.jpeg'
import day1_5 from '../../assets/blogs/day1/day1-5.jpeg'
import day1_6 from '../../assets/blogs/day1/day-1-6.jpg'
import day2_2 from '../../assets/blogs/day2/day2-2.jpg'
import day2_3 from '../../assets/blogs/day2/day2-3.jpg'
import day2_4 from '../../assets/blogs/day2/day2-4.jpg'
import day2_5 from '../../assets/blogs/day2/day2-5.jpg'
import day2_6 from '../../assets/blogs/day2/day2-6.jpg'
import day2_7 from '../../assets/blogs/day2/day2-7.jpg'
import day2_8 from '../../assets/blogs/day2/day2-8.jpeg'
import day2_9 from '../../assets/blogs/day2/day2-9.jpeg'
import day3_1 from '../../assets/blogs/day3/day3-1.jpg'
import day3_2 from '../../assets/blogs/day3/day3-2.jpg'
import day3_3 from '../../assets/blogs/day3/day3-3.jpg'
import day3_4 from '../../assets/blogs/day3/day3-4.jpg'
import day3_5 from '../../assets/blogs/day3/day3-5.jpg'
import day3_6 from '../../assets/blogs/day3/day3-6.jpg'
import day3_7 from '../../assets/blogs/day3/day3-7.jpg'
import day3_8 from '../../assets/blogs/day3/day3-8.jpg'
import day3_9 from '../../assets/blogs/day3/day3-9.jpeg'
import day3_10 from '../../assets/blogs/day3/day3-10.jpeg'
import day3_11 from '../../assets/blogs/day3/day3-11.jpeg'
import day4_1 from '../../assets/blogs/day4/day4-1.jpg'
import day4_2 from '../../assets/blogs/day4/day4-2.jpg'
import day4_3 from '../../assets/blogs/day4/day4-3.jpg'
import day4_4 from '../../assets/blogs/day4/day4-4.jpg'
import day4_5 from '../../assets/blogs/day4/day4-5.jpg'
import day4_6 from '../../assets/blogs/day4/day4-6.jpg'
import day5_1 from '../../assets/blogs/day5/day5-1.jpg'
import day5_2 from '../../assets/blogs/day5/day5-2.jpg'
import day5_3 from '../../assets/blogs/day5/day5-3.jpg'
import day5_4 from '../../assets/blogs/day5/day5-4.jpg'
import day5_5 from '../../assets/blogs/day5/day5-5.jpg'
import day5_6 from '../../assets/blogs/day5/day5-6.jpg'
import day5_7 from '../../assets/blogs/day5/day5-7.jpg'
import day5_8 from '../../assets/blogs/day5/day5-8.jpg'
import day5_9 from '../../assets/blogs/day5/day5-9.jpg'
import day5_11 from '../../assets/blogs/day5/day5-11.jpeg'
import day5_12 from '../../assets/blogs/day5/day5-12.jpg'
import day5_13 from '../../assets/blogs/day5/day5-13.jpg'
import day6_2 from '../../assets/blogs/day6/day6-2.jpg'
import day6_3 from '../../assets/blogs/day6/day6-3.jpg'
import day6_4 from '../../assets/blogs/day6/day6-4.jpg'
import day6_5 from '../../assets/blogs/day6/day6-5.jpg'
import day6_6 from '../../assets/blogs/day6/day6-6.jpg'
import day6_7 from '../../assets/blogs/day6/day6-7.jpg'
import day6_8 from '../../assets/blogs/day6/day6-8.jpg'
import day6_9 from '../../assets/blogs/day6/day6-9.jpg'
import day6_10 from '../../assets/blogs/day6/day6-10.jpg'
import day6_11 from '../../assets/blogs/day6/day6-11.jpg'
import day6_12 from '../../assets/blogs/day6/day6-12.jpg'
import day6_13 from '../../assets/blogs/day6/day6-13.jpg'
import day6_14 from '../../assets/blogs/day6/day6-14.jpg'
import day6_15 from '../../assets/blogs/day6/day6-15.jpeg'
import day6_16 from '../../assets/blogs/day6/day6-16.jpeg'
import day7_3 from '../../assets/blogs/day7/day7-3.jpg'
import day7_4 from '../../assets/blogs/day7/day7-4.jpg'
import day7_5 from '../../assets/blogs/day7/day7-5.jpg'
import day7_6 from '../../assets/blogs/day7/day7-6.jpg'
import day7_7 from '../../assets/blogs/day7/day7-7.jpg'
import day7_8 from '../../assets/blogs/day7/day7-8.jpg'
import day7_9 from '../../assets/blogs/day7/day7-9.jpg'
import day8_3 from '../../assets/blogs/day8/day8-3.jpg'
import day8_4 from '../../assets/blogs/day8/day8-4.jpg'
import day8_5 from '../../assets/blogs/day8/day8-5.jpeg'

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Day 1: Arrival in Manila",
            date: "April 7, 2025",
            summary: "Flight landed in Manila at 3pm after departing at 1pm, beginning our educational tour.",
            content: "Today marked the beginning of our educational journey with our arrival in Manila. Our flight departed at 1pm and we landed in the afternoon around 3pm. We were excited to start our educational tour and looking forward to all the experiences ahead.",
            images: [
                day1_2,
                day1_3,
                day1_4,
                day1_5,
                day1_6
            ]
        },
        {
            id: 2,
            title: "Day 2: Exploring Subic and Olongapo",
            date: "April 8, 2025",
            summary: "A day of visiting Subic Bay Exhibition, SBMA departments, and duty-free shopping.",
            content: "Our second day was spent exploring Subic and Olongapo. We visited the Subic Bay Exhibition, SBMA Law Enforcement Department, and SBMA Seaport Department where we got to see the Vessel Traffic Management System in action. We also enjoyed some time at Subic Bay Park and finished the day with shopping at the Royal Duty-free shops.",
            images: [
                day2_2,
                day2_3,
                day2_4,
                day2_5,
                day2_6,
                day2_7,
                day2_8,
                day2_9
            ]
        },
        {
            id: 3,
            title: "Day 3: Cultural Heritage Exploration",
            date: "April 9, 2025",
            summary: "Visiting the National Museum and Museo ni Manuel Quezon to learn about Filipino heritage and history.",
            content: "Today was dedicated to exploring Filipino cultural heritage. We visited the National Museum where we admired various artifacts, artworks, and historical exhibits that showcase the rich history and culture of the Philippines. We also went to Museo ni Manuel Quezon, learning about the life and legacy of this important historical figure in Philippine history.",
            images: [
                day3_1,
                day3_2,
                day3_3,
                day3_4,
                day3_5,
                day3_6,
                day3_7,
                day3_8,
                day3_9,
                day3_10,
                day3_11
            ]
        },
        {
            id: 4,
            title: "Day 4: Economic and Technological Insights",
            date: "April 10, 2025",
            summary: "Tours of Bangko Sentral ng Pilipinas and Hytec Power Inc., with some shopping at Trinoma Mall.",
            content: "An insightful day as we visited the Bangko Sentral ng Pilipinas to learn about currency production, though we couldn't take photos due to strict security policies. We also toured Hytec Power Inc. where we saw robotics and machinery in action. The day ended with some leisure time shopping at Trinoma Mall.",
            images: [
                day4_1,
                day4_2,
                day4_3,
                day4_4,
                day4_5,
                day4_6
            ]
        },
        {
            id: 5,
            title: "Day 5: Urban Transportation Systems",
            date: "April 11, 2025",
            summary: "Learning about traffic management at MMDA and rail transit operations at LRTA-Line 2.",
            content: "Today we focused on urban transportation systems. In the morning, we visited the MMDA Traffic Engineering Center to learn about traffic management in Metro Manila. In the afternoon, we went to the Light Rail Transit Authority-Line 2 where we got insights into the operations and management of one of Manila's major public transportation systems.",
            images: [
                day5_1,
                day5_2,
                day5_3,
                day5_4,
                day5_5,
                day5_6,
                day5_7,
                day5_8,
                day5_9,
                day5_11,
                day5_12,
                day5_13
            ]
        },
        {
            id: 6,
            title: "Day 6: Journey to Baguio and City Tour",
            date: "April 12, 2025",
            summary: "Early morning travel to Baguio, visiting the Strawberry Farm, Chinese Bell Church, PMA, and iconic city landmarks.",
            content: "An early start today with a 1:00am departure for Baguio, arriving at 6am. We visited the Strawberry Farm and Chinese Bell Church before heading to our hotel for breakfast. In the afternoon, we had the privilege of touring the Philippine Military Academy. After lunch back at the hotel, we continued our Baguio tour with visits to Mines View Park, Wright Park, Mansion House, and Burnham Park.",
            images: [
                day6_2,
                day6_3,
                day6_4,
                day6_5,
                day6_6,
                day6_7,
                day6_8,
                day6_9,
                day6_10,
                day6_11,
                day6_12,
                day6_13,
                day6_14,
                day6_15,
                day6_16
            ]
        },
        {
            id: 7,
            title: "Day 7: Baguio Souvenir Shopping and Return to Manila",
            date: "April 13, 2025",
            summary: "Free time to explore Baguio in the morning, afternoon return to Manila, and evening at BGC.",
            content: "Our final day in Baguio started with free time in the morning to roam around and buy souvenirs. At noon, we began our journey back to Manila, arriving at 6pm. After dinner at 7pm, we spent the evening exploring Manila, particularly Bonifacio Global City (BGC).",
            images: [
                day7_3,
                day7_4,
                day7_5,
                day7_6,
                day7_7,
                day7_8,
                day7_9
            ]
        },
        {
            id: 8,
            title: "Day 8: Homeward Bound to Zamboanga",
            date: "April 14, 2025",
            summary: "Early breakfast, morning flight, and arrival back home to Zamboanga.",
            content: "Our educational tour came to an end as we prepared to return home. We had an early breakfast at 5am before heading to the airport at 6am. After waiting for our boarding time, we flew back to Zamboanga, arriving at 12pm. It was an educational and memorable week filled with new experiences and knowledge.",
            images: [
                day8_3,
                day8_4,
                day8_5
            ]
        }
    ];

    return (
        <div className="blog min-h-screen py-20 px-4 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[url('assets/blog1gradient.svg')] bg-center bg-no-repeat bg-[length:1900px_2000px]"></div>
            
            <div className="container mx-auto relative z-10">
                <h1 className="text-center text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 md:mb-16">Blog Educational Tour</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map(blog => (
                        <div 
                            key={blog.id} 
                            className="bg-black/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 flex flex-col h-full"
                        >
                            <Link to={`/blog/${blog.id}`} className="relative h-56 overflow-hidden cursor-pointer">
                                <img 
                                    src={blog.images[0]} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Day {blog.id}
                                </div>
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                                    <p className="text-blue-300 mb-2 text-sm">{blog.date}</p>
                                    <p className="text-gray-300 mb-4">{blog.summary}</p>
                                </div>
                                <div className="mt-auto">
                                    <Link 
                                        to={`/blog/${blog.id}`}
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
                                    >
                                        <span className="mr-2">Read More</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 
