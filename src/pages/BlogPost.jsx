import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import day1_2 from '../assets/blogs/day1/day1-2.jpg'
import day1_3 from '../assets/blogs/day1/day1-3.jpg'
import day1_4 from '../assets/blogs/day1/day1-4.jpeg'
import day1_5 from '../assets/blogs/day1/day1-5.jpeg'
import day1_6 from '../assets/blogs/day1/day-1-6.jpg'
import day2_2 from '../assets/blogs/day2/day2-2.jpg'
import day2_3 from '../assets/blogs/day2/day2-3.jpg'
import day2_4 from '../assets/blogs/day2/day2-4.jpg'
import day2_5 from '../assets/blogs/day2/day2-5.jpg'
import day2_6 from '../assets/blogs/day2/day2-6.jpg'
import day2_7 from '../assets/blogs/day2/day2-7.jpg'
import day2_8 from '../assets/blogs/day2/day2-8.jpeg'
import day2_9 from '../assets/blogs/day2/day2-9.jpeg'
import day3_1 from '../assets/blogs/day3/day3-1.jpg'
import day3_2 from '../assets/blogs/day3/day3-2.jpg'
import day3_3 from '../assets/blogs/day3/day3-3.jpg'
import day3_4 from '../assets/blogs/day3/day3-4.jpg'
import day3_5 from '../assets/blogs/day3/day3-5.jpg'
import day3_6 from '../assets/blogs/day3/day3-6.jpg'
import day3_7 from '../assets/blogs/day3/day3-7.jpg'
import day3_8 from '../assets/blogs/day3/day3-8.jpg'
import day3_9 from '../assets/blogs/day3/day3-9.jpeg'
import day3_10 from '../assets/blogs/day3/day3-10.jpeg'
import day3_11 from '../assets/blogs/day3/day3-11.jpeg'
import day4_1 from '../assets/blogs/day4/day4-1.jpg'
import day4_2 from '../assets/blogs/day4/day4-2.jpg'
import day4_3 from '../assets/blogs/day4/day4-3.jpg'
import day4_4 from '../assets/blogs/day4/day4-4.jpg'
import day4_5 from '../assets/blogs/day4/day4-5.jpg'
import day4_6 from '../assets/blogs/day4/day4-6.jpg'
import day5_1 from '../assets/blogs/day5/day5-1.jpg'
import day5_2 from '../assets/blogs/day5/day5-2.jpg'
import day5_3 from '../assets/blogs/day5/day5-3.jpg'
import day5_4 from '../assets/blogs/day5/day5-4.jpg'
import day5_5 from '../assets/blogs/day5/day5-5.jpg'
import day5_6 from '../assets/blogs/day5/day5-6.jpg'
import day5_7 from '../assets/blogs/day5/day5-7.jpg'
import day5_8 from '../assets/blogs/day5/day5-8.jpg'
import day5_9 from '../assets/blogs/day5/day5-9.jpg'
import day5_11 from '../assets/blogs/day5/day5-11.jpeg'
import day5_12 from '../assets/blogs/day5/day5-12.jpg'
import day5_13 from '../assets/blogs/day5/day5-13.jpg'
import day6_2 from '../assets/blogs/day6/day6-2.jpg'
import day6_3 from '../assets/blogs/day6/day6-3.jpg'
import day6_4 from '../assets/blogs/day6/day6-4.jpg'
import day6_5 from '../assets/blogs/day6/day6-5.jpg'
import day6_6 from '../assets/blogs/day6/day6-6.jpg'
import day6_7 from '../assets/blogs/day6/day6-7.jpg'
import day6_8 from '../assets/blogs/day6/day6-8.jpg'
import day6_9 from '../assets/blogs/day6/day6-9.jpg'
import day6_10 from '../assets/blogs/day6/day6-10.jpg'
import day6_11 from '../assets/blogs/day6/day6-11.jpg'
import day6_12 from '../assets/blogs/day6/day6-12.jpg'
import day6_13 from '../assets/blogs/day6/day6-13.jpg'
import day6_14 from '../assets/blogs/day6/day6-14.jpg'
import day6_15 from '../assets/blogs/day6/day6-15.jpeg'
import day6_16 from '../assets/blogs/day6/day6-16.jpeg'
import day7_3 from '../assets/blogs/day7/day7-3.jpg'
import day7_4 from '../assets/blogs/day7/day7-4.jpg'
import day7_5 from '../assets/blogs/day7/day7-5.jpg'
import day7_6 from '../assets/blogs/day7/day7-6.jpg'
import day7_7 from '../assets/blogs/day7/day7-7.jpg'
import day7_8 from '../assets/blogs/day7/day7-8.jpg'
import day7_9 from '../assets/blogs/day7/day7-9.jpg'
import day8_3 from '../assets/blogs/day8/day8-3.jpg'
import day8_4 from '../assets/blogs/day8/day8-4.jpg'
import day8_5 from '../assets/blogs/day8/day8-5.jpeg'


const getExpandedContent = (id) => {
    switch(id) {
        case 1:
            return "It was supposed to be an early morning departure at 8am to book a flight going to Manila, but due to budget constraints, we opted for the more affordable afternoon flight. Although this meant missing some of the Day 1 tour activities in Manila, we still arrived safely at around 3pm. The service from DJM Tours was excellent – they picked us up from the airport and provided us with snacks to freshen up after the journey.\n\nAfter settling in, we headed out to join the rest of the students who were already exploring SM Mall of Asia, one of the largest shopping malls in the Philippines and Asia. The mall's seaside location offered a picturesque view of Manila Bay, and we enjoyed a short strolling session until around 6:30pm, taking in the vibrant atmosphere and getting to know our fellow travelers.\n\nAs the evening approached, we proceeded to the dormitory where we would be staying throughout our educational tour. The accommodations were comfortable and conveniently located, allowing easy access to various tour destinations. Despite the tiredness from travel, there was an unmistakable excitement in the air as we prepared for the adventures that awaited us in the days ahead.";
        
        case 2:
            return "Our first official educational tour day began with an early breakfast before boarding our designated tour bus to Subic, Olongapo. The journey was filled with scenic views of the countryside as our tour guide shared interesting facts about the history of the former US Naval Base.\n\nOur first stop was the Subic Bay Exhibition and Convention Center, where we had a surreal experience learning about the historical significance of Subic Bay. The exhibition showcased artifacts, photographs, and information panels detailing the transformation of Subic from a military base to a thriving economic zone.\n\nFollowing this educational introduction, we visited the SBMA Law Enforcement Department. Here, officers gave us comprehensive insights into how they maintain order and security within the Subic Bay Freeport Zone. We had the opportunity to see their command center and learn about their patrol procedures.\n\nOur educational journey continued at the SBMA Seaport Department, where officials demonstrated their maritime operations. They explained the sophisticated Vessel Traffic Management System that monitors and coordinates ship movements in Subic Bay. We observed the real-time tracking screens and learned about international shipping protocols.\n\nBy midday, we enjoyed a refreshing lunch at Malawaan Picnic Park. The beautiful waterfront setting provided a perfect backdrop for relaxation and reflection on our morning's learning experiences. After lunch, we had some time to purchase souvenirs to commemorate our visit.\n\nIn the afternoon, we embarked on an SBMA Base Tour, seeing the former military facilities from the comfort of our bus. We concluded our day with shopping at Royal Duty-Free, where we could purchase imported goods at tax-free prices. Tired but fulfilled, we returned to our accommodations in Manila, our minds enriched with new knowledge about Subic's historical significance and current operations.";
        
        case 3:
            return "Our third day was dedicated to immersing ourselves in the Philippines' rich cultural heritage through visits to some of the country's most treasured historical sites and collections. We explored the National Museum of Natural History, an architectural marvel housed in a beautifully restored neoclassical building. As we entered the grand hall dominated by the impressive 'Tree of Life' structure, we were immediately struck by the museum's blend of historical architecture and modern exhibition design.\n\nThe museum's extensive collections took us on a journey through the Philippines' biodiversity, geological history, and endemic species. The expert museum guides provided detailed explanations about significant artifacts and specimens, enhancing our understanding of the Philippines' natural heritage.\n\nAfter a quick lunch, we continued our cultural exploration with a visit to the Quezon Memorial Shrine. The imposing monument, consisting of three pylons representing Luzon, Visayas, and Mindanao, left us in awe of its grandeur. Inside the museum at the base of the monument, we learned about the life and legacy of Manuel L. Quezon, the second President of the Philippines and a key figure in the country's struggle for independence.\n\nPerhaps the most unexpected delight of our visit was the collection of vintage presidential cars. These well-preserved vehicles, which had transported various Philippine presidents throughout history, were not just displays of luxury automobiles but also tangible connections to historical moments in the nation's past. Each car had its own story, from state visits to important political events, adding another dimension to our understanding of Philippine presidential history.\n\nAs evening approached, it took exciting turn as we headed to StarCity, one of Manila's popular amusement parks. Despite arriving at 9pm with only an hour before closing time, we were determined to make the most of our visit. Our group of friends and classmates challenged ourselves to experience as many rides as possible in the limited time we had. The adrenaline rush of the roller coasters and other thrilling attractions provided a perfect contrast to our day of historical and cultural learning.\n\nRacing from one ride to another, we created unforgettable memories filled with screams, laughter, and excitement. Even with the park's 10pm closing time looming, we managed to squeeze in an impressive number of attractions. The spontaneous nature of this evening adventure added an element of fun and camaraderie to our educational journey. As we left StarCity, exhausted but exhilarated, we agreed that these shared moments of joy were just as valuable as the formal educational experiences of our tour - building bonds among classmates that would last long after our return home.";
        
        case 4:
            return "We started the day with a guided tour of the Bangko Sentral ng Pilipinas. The intricate and safe procedures that go into making Philippine currency were explained to us here. We were unable to take any pictures throughout the tour because of stringent security measures that prohibited phones and cameras inside, protecting the privacy and security of the currency-making process.\n\nThe guided tour was truly eye-opening. We learned about the complex and meticulously secure processes behind the production of Philippine money. From the initial design stage to the final quality control checks, every step in creating currency involves sophisticated technology and multiple layers of security features. Our guide explained how anti-counterfeiting measures are incorporated into each note and coin, pointing out security features that are visible to the public and others that can only be detected by specialized equipment.\n\nAfter our educational experience at the BSP, we headed to Hytec Power Inc., a company at the forefront of technological innovation in the Philippines. At Hytec Power Inc., we were introduced to cutting-edge robotics and machinery designed for various industrial applications. Company representatives demonstrated how their automated systems improve efficiency, precision, and safety in manufacturing processes.\n\nOur day of economic and technological education concluded with some leisure time at Trinoma Mall, one of Metro Manila's premier shopping destinations. After absorbing so much information, it was refreshing to unwind and explore the mall's diverse shops and dining options.";
        
        case 5:
            return "Day 5 of our educational tour focused on urban transportation systems, a critical aspect of daily life in Metro Manila. Our morning began with a visit to the Metropolitan Manila Development Authority (MMDA) Traffic Engineering Center. Upon arrival, we were greeted by traffic management experts who introduced us to their department's operations. The center resembled a high-tech command post, with multiple screens displaying real-time traffic conditions across various major thoroughfares of Metro Manila.\n\nThe MMDA officials explained how they utilize an integrated network of over 400 CCTV cameras strategically positioned throughout the metropolis to monitor traffic flow. We watched as operators zoomed in on congested areas, coordinated with ground personnel, and adjusted traffic light timings remotely to alleviate bottlenecks. One of the most impressive aspects was their use of advanced analytics and AI-powered software to predict traffic patterns based on historical data, weather conditions, and scheduled events.\n\nIn the afternoon, we visited the Light Rail Transit Authority (LRTA) operations center for Line 2, locally known as the Purple Line. This elevated railway system is a crucial transportation artery connecting eastern and central Manila. Following the introduction, we were given an exclusive tour of the central control room – the nerve center of the entire Line 2 operation. Here, train controllers monitored a large display board showing the positions of all trains on the line in real-time.\n\nThe most exciting part of our LRTA visit was the opportunity to ride the LRT Line 2 as regular commuters, applying our new knowledge to understand the system from a user perspective. During our journey, we noted elements of station design, passenger flow management, and operational efficiency that had been explained during our tour.";
        
        case 6:
            return "An early start today with a 1:00am departure for Baguio, arriving at 6am. Despite the predawn hour, there was a buzz of excitement as we loaded our luggage onto the tour bus and settled in for the long journey ahead. As dawn broke, we found ourselves winding through mountain roads, with misty valleys below and pine-covered slopes above. The dramatic drop in temperature was noticeable as we ascended into the Cordillera mountain range.\n\nWe arrived in Baguio around 6:00 AM, greeted by a refreshing morning chill that was a welcome change from Manila's humidity. Our first stop was the La Trinidad Strawberry Farm, located just outside Baguio City proper. The sprawling fields of strawberries were a sight to behold, with rows of green plants dotted with bright red fruits stretching across the valley. Many of us took the opportunity to try strawberry picking, experiencing firsthand the care required to harvest the delicate fruits without damaging them.\n\nOur next destination was the Chinese Bell Church, a unique cultural and religious landmark that reflects the significant Chinese influence in Philippine culture. The temple complex, with its distinctive Oriental architecture featuring red pillars, curved roofs, and ornate decorations, stood in stark contrast to the surrounding pine trees and mountain slopes.\n\nIn the afternoon, we visited one of the most prestigious educational institutions in the Philippines – the Philippine Military Academy (PMA). We were fortunate to witness a demonstration of the cadets' precision drills, showcasing their impeccable training and discipline. A guided tour of the campus included visits to the museum, which houses military artifacts and memorabilia chronicling the academy's history and the nation's military heritage.\n\nFollowing our educational visit to the PMA, we returned to our hotel for lunch, where we sampled some local Baguio specialties. Our afternoon tour continued with visits to Mines View Park, famous for its spectacular view of the former mining town of Itogon and the surrounding mountains; Wright Park, known for its long pool of water called the \"Pool of Pines\"; The Mansion, the official summer residence of the Philippine President; and finally Burnham Park, the green heart of Baguio City, where we enjoyed paddle boating on the man-made lake.";
        
        case 7:
            return "Our seventh day began with a more flexible schedule, allowing us to sleep in a little longer after the previous day's extensive touring. After breakfast at the hotel, we were given free time until noon to explore Baguio at our own pace. This opportunity for independent exploration was eagerly welcomed by all of us, as it allowed us to revisit favorite spots or discover places not included in our official itinerary.\n\nMany of us chose to return to Burnham Park, the central green space of Baguio that we had briefly visited the previous afternoon. In the fresh morning light, the park had a different feel – locals were exercising along the paths, vendors were setting up food stalls, and the lake's surface was perfectly still, reflecting the surrounding pine trees. Some of our group rented bicycles to explore the park's extensive grounds, while others found peaceful spots to sit and absorb the atmosphere of this mountain city.\n\nA significant portion of our free time was dedicated to purchasing souvenirs and local products. Baguio is famous for its handcrafted goods, woven items, silver jewelry, and food products like ube jam, strawberry preserves, and peanut brittle. The public market was a popular destination, where we could find these items at better prices than in tourist shops.\n\nAs noon approached, we gathered at our hotel with our purchases carefully packed away. After checking out and having a quick lunch, we boarded our bus for the long journey back to Manila. The return journey took approximately 5-6 hours, and we occupied ourselves in various ways – some napped, others chatted about their experiences, while some used the time to organize photos or write journal entries about our tour.\n\nWe arrived in Manila around 6:00 PM and headed directly to a restaurant for dinner. After dinner, we spent the evening exploring Bonifacio Global City (BGC), one of Metro Manila's most modern and upscale districts. The contrast between the provincial charm of Baguio and the gleaming high-rises and international brands of BGC was striking, giving us yet another perspective on the Philippines' diverse development.";
        
        case 8:
            return "Our eighth and final day of the educational tour began early, as we prepared for our journey back to Zamboanga. We woke up at around 4:30 AM to ensure we had enough time to pack our belongings, check out of the dormitory, and have breakfast before heading to the airport. The dormitory staff had prepared a special early breakfast for us at 5:00 AM, providing a hearty meal to sustain us during our travel day.\n\nAfter breakfast, we loaded our luggage onto the bus and bid farewell to the dormitory that had been our home base for the past week. The predawn streets of Manila were relatively quiet as we made our way to Ninoy Aquino International Airport, a stark contrast to the bustling traffic we had become accustomed to during our stay. We arrived at the airport around 6:00 AM, allowing ample time for check-in procedures and security screenings for our 10:00 AM flight.\n\nAt the airport, our DJM Tours representatives gathered us for a final briefing and farewell. The tour company had been instrumental in making our educational journey smooth and enriching, handling all the logistical details that allowed us to focus fully on learning. Many of us expressed heartfelt gratitude to our tour guides and coordinators, exchanging contact information to stay in touch.\n\nBoarding began around 9:30 AM, and there was a sense of familiarity as we settled into our seats for the flight back to Zamboanga. Our flight took approximately two hours, and we touched down in Zamboanga City around 12:00 PM. As we disembarked, the familiar tropical heat of our home region greeted us – a contrast to both Manila's urban warmth and Baguio's cool mountain air.\n\nBefore dispersing, we gathered for one final group photo outside the airport – a bookend to the many group pictures taken throughout our educational journey. As we said our goodbyes and departed in different directions, there was a shared understanding that our educational tour had been more than just a series of visits to interesting places. It had been a comprehensive learning experience that broadened our perspectives on our country's history, culture, economy, and development.";
            
        default:
            return "";
    }
};

const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && lightboxOpen) {
                closeLightbox();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [lightboxOpen]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const blogPosts = [
            {
                id: 1,
                title: "Day 1: Arrival in Manila",
                date: "April 7, 2025",
                summary: "Flight landed in Manila at 3pm after departing at 1pm, beginning our educational tour.",
                content: getExpandedContent(1),
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
                content: getExpandedContent(2),
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
                content: getExpandedContent(3),
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
                content: getExpandedContent(4),
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
                content: getExpandedContent(5),
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
                content: getExpandedContent(6),
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
                content: getExpandedContent(7),
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
                content: getExpandedContent(8),
                images: [
                    day8_3,
                    day8_4,
                    day8_5
                ]
            }
        ];

        const foundBlog = blogPosts.find(post => post.id === parseInt(id));
        setBlog(foundBlog);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        if (!blog) return;
        
        const smoothScrollHandler = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const hashLinks = document.querySelectorAll('a[href^="#"]');
        hashLinks.forEach(link => {
            link.addEventListener('click', smoothScrollHandler);
        });

        return () => {
            hashLinks.forEach(link => {
                link.removeEventListener('click', smoothScrollHandler);
            });
        };
    }, [blog]); 

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-white text-2xl">Loading...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-white text-2xl mb-6">Blog post not found</div>
                <Link to="/#blog" className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-md">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative">
            {/* Hero Section */}
            <div className="h-screen relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black z-5"></div>
                <img 
                    src={blog.images[0]} 
                    alt={blog.title} 
                    className="w-full h-full object-cover fixed inset-0"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-32">
                    <div className="max-w-5xl">
                        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 w-fit">
                            Day {blog.id}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">{blog.title}</h1>
                        <p className="text-blue-300 text-xl mb-6">{blog.date}</p>
                        <p className="text-white text-xl font-medium max-w-3xl">{blog.summary}</p>
                        <div className="mt-12">
                            <a 
                                href="#content" 
                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 px-8 rounded-md inline-flex items-center transition-colors duration-300"
                            >
                                Read Article
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div id="content" className="relative z-10 bg-gradient-to-b from-black to-neutral-900 py-20 px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="max-w-5xl mx-auto">
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-gray-300 text-xl leading-relaxed mb-12">{blog.content}</p>
                        
                        <h2 className="text-3xl font-bold text-white mt-16 mb-8">Photo Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blog.images.map((image, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                                    <img 
                                        src={image} 
                                        alt={`${blog.title} - Image ${index + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button 
                                            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors duration-300"
                                            onClick={() => openLightbox(image)}
                                        >
                                            View Full
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 pt-8 border-t border-gray-800 mb-0">
                            <Link to="/#blog" className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-md inline-flex items-center transition-colors duration-300">
                                <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                                Back to Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
                    <div className="relative max-w-7xl max-h-[90vh] w-full">
                        <button 
                            className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeLightbox();
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div 
                            className="w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage} 
                                alt="Full size view" 
                                className="max-w-full max-h-[85vh] object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPost; 
