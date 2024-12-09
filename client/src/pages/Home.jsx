// this page is the home page, or the page that all users will first see when accessing the website. Not user dashboard
import { Link } from "react-router-dom";
import { useState } from 'react';

// better to keep in assets
import mainImage from "../assets/budgeting.png"
import homeback from "../assets/homeback.jpg"
import HomeGridDisplay from "../components/HomeGridDisplay";

export default function Home() {
    const featureList = [
        {
            "name": "Personal/Group Budget Planner",
            "description": "We offer both group and personal budget plan functionalities. This flexibility allows for users to create plans with the friends for trips or even just solo plans to budget properly"
        },
        {
            "name": "User Dashboard",
            "description": "Our user dashboard feature allows for our users to easily access different parts our application while offering user data visualizations to make our application emersive"
        },
        {
            "name": "Budget Calender",
            "description": "Users can easily set end and start dates to the various plans they created and visualize these expected timelines using our budgeting calender feature"
        },
        {
            "name": "Website Articles",
            "description": "We also offer articles regarding budgeting and finance for our users to read while using our application."
        },
        {
            "name": "Friend Adder",
            "description": "Users can add their friends and family and creating plans involving whoever they desire."
        },
        {
            "name": "Leaderboard",
            "description": "A small added twist to our website, you can comepete with added friends and family memebers to see who is the most financially responsible!"
        }
    ]

    const [expandedFeatures, setExpandedFeatures] = useState([]);

    return (
        <>
            <div style={{ backgroundImage: `url(${homeback})` }} className="bg-cover bg-no-repeat h-screen w-full flex flex-col items-center justify-center space-x-4 mt-10">
                <div className="text-center">       
                    <h1 className="font-Outfit text-8xl font-extrabold text-white">
                        Where <span className="text-orange-600">Budgeting</span> Meets <span className="text-blue-600">Efficiency</span>
                    </h1>

                    <br/>

                    <p className="font-Outfit text-2xl text-white">We get it. Budgeting can be hard, let us help!</p>
                    <div className="relative mt-10">
                        <Link to='/create'>
                            <button
                                className="z-0 w-72 h-14 rounded bg-orange-500 py-1 px-2.5 text-center text-md text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:bg-orange-600 active:bg-orange-700 disabled:pointer-events-none disabled:opacity-50"
                                type="button"
                            >
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-10 mb-5 items-center justify-center font-Outfit text-center">
                <div className="w-full bg-gradient-to-r from-orange-50 to-blue-50 py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-5xl font-bold mb-8 text-gray-800">
                            Our <span className="text-orange-500">Purpose</span>
                        </h1>
                        <p className="text-xl">The purpose of our website is to provide our users and their friends a comfortable and easy way to budget intelligently. Our website is perfect for those who need help budgeting properly for everyday tasks, group trips, and additional expenses for special occassions. We offer a plethora of tools to aid in budgeting.</p>
                    </div>
                </div>

                <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
                    <h1 className="text-5xl font-bold mb-8 text-gray-800">
                        Our <span className="text-orange-500">Tools</span>
                    </h1>
                    <p className="text-xl mb-12">Here is an overview of all of our offered services, read them to further understand what we offer.</p>

                    <div className="grid grid-cols-2 w-3/4 gap-6 mx-auto">
                        {featureList.map((feature, index) => (
                            <div 
                                key={index} 
                                className="bg-blue-300 p-8 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col items-center"
                                onClick={() => {
                                    setExpandedFeatures(prev => 
                                        prev.includes(index)
                                            ? prev.filter(i => i !== index)
                                            : [...prev, index]
                                    );
                                }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">{feature.name}</h3>
                                <p className={`text-gray-700 overflow-hidden transition-all duration-300 text-left ${
                                    expandedFeatures.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full py-16 bg-gray-50">
                    <h2 className="text-5xl font-bold mb-8 text-gray-800">
                        What Our <span className="text-orange-500">Users</span> Say
                    </h2>
                    <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"BudgetSmart helped me save for my dream vacation. The group planning feature made it easy to coordinate with friends!"</p>
                            <p className="font-semibold">- Sarah M.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"The dashboard visualizations make it so easy to track my spending habits. I've saved more in 3 months than I did all last year!"</p>
                            <p className="font-semibold">- James R.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"Planning our family reunion budget was a breeze. Everyone could see their contributions and track our progress in real-time."</p>
                            <p className="font-semibold">- Maria L.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"The leaderboard feature adds a fun competitive element. My roommates and I compete to see who can save the most each month!"</p>
                            <p className="font-semibold">- Alex K.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"As a financial advisor, I recommend BudgetSmart to my clients. It's intuitive and helps build good financial habits."</p>
                            <p className="font-semibold">- David W.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <p className="text-gray-600 mb-4">"The articles section has taught me so much about personal finance. It's like having a financial education hub built right in!"</p>
                            <p className="font-semibold">- Emma T.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-blue-400 p-10">
                    <h1 className="text-5xl font-bold mb-8 text-white">
                        Enjoy Our <span className="text-orange-400">Website</span>
                    </h1>

                    <div className="flex flex-row gap-10 justify-center items-center">
                        <img className="w-1/2" src={mainImage} height={300} width={300}/>
                        <div className="w-1/2 flex flex-col gap-6">
                            <p className="text-xl">We hope you enjoy our website and all of the features we offer. You can begin signing up or logging in to enjoy our services. Make sure to add your friends and family to fully enjoy in-depth group and individual budget planning</p>
                            
                            <div className="text-center">
                                <Link to='/create'>
                                    <button className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 duration-200">
                                        Start Your Journey Today
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center border-t-2 w-full h-16 p-5">
                    <p className="text-slate-500">© 2024 BudgetSmart, Inc. All rights reserved</p>
                </div>

            </div>

        </>
    );

}