import React from 'react'
import '../index.css'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className="text-white hero-section background-tint">
            <div className=" max-w-[800px] h-screen w-full  mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-7xl sm:text-6xl w-full text-4xl font-bold md:py-6">Discover Your <Typed strings={['Manhattan', 'Brooklyn', 'Long Island', 'Queens', 'Bronx']} typeSpeed={120} backSpeed={140} loop />
                </h1>
                <p className="pt-2 text-1xl md:text-xl sm:text-xl px-4">Helping you discover the most amazing night life for an amazing price </p>
                <div className="btn">
                    <button className="bg-transparent hover:bg-cyan-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent duration-500 rounded mt-5">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
