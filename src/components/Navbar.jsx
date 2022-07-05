import React from 'react'

const Navbar = () => {

    const handleToggle = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle('hidden')
    }


    return (
        <nav className="bg-cyan-600	shadow-lg fixed w-full">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src="https://sticnuru.sirv.com/go-images/GO%20Transparent.png" alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-semibold text-white text-lg uppercase"
                                >Gotham Oracle</span
                                >
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            <a
                                href=""
                                className="py-4 px-2 text-white hover:text-green-500 font-semibold "
                            >Home</a
                            >

                            <a
                                href=""
                                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
                            >About</a
                            >
                            <a
                                href=""
                                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
                            >Contact Us</a
                            >
                        </div>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button onClick={handleToggle} class="outline-none mobile-menu-button">
                            <svg
                                class="w-6 h-6 text-black-500"
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                    </div>

                </div>

            </div>
            <div className="hidden mobile-menu ">
                <ul className="">
                    <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                    <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 text-white transition duration-300">About</a></li>
                    <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 text-white transition duration-300">Contact Us</a></li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar
