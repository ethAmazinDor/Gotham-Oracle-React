import React from 'react'

const About = () => {
    return (
        <section id="features" className="">
            <div className="container  flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w text-4xl font-bold text-center md:text-left border-b-8 border-cyan-600 ">

                        What we offer
                    </h2>
                    <p className="max-w text-center md:mr-5 text-black md:text-left">
                        Gotham Oracle is everyone's one-stop shop for the best deals and discoveries New York City has to offer.

                        We've sourced and ranked every dining deal, party plan, wellness retreat, or recreational activity you can think of in NYC.

                        And it's all available for free to you in a couple of clicks
                    </p>
                </div>

                {/* Numbered List */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    {/*List Item 1 */}
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* heading of list item */}
                        <div className="rounded-l-full bg-cyan-600 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-cyan-600">
                                    01
                                </div>
                                <h3 className="text-base font-bold text-white md:mb-4 md:hidden">
                                    Get the best deals
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg text-white font-bold md:block">
                                Get the best deals
                            </h3>
                            <p className="text-slate-600">
                                You pick the place, price, date, and type of event,
                                and we’ll provide you with a curated schedule of The Big Apple.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* heading of list item 2*/}
                        <div className="rounded-l-full bg-cyan-600 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-cyan-600">
                                    02
                                </div>
                                <h3 className="text-base font-bold text-white md:mb-4 md:hidden">
                                    Curated For You
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg text-white font-bold md:block">
                                Curated For You
                            </h3>
                            <p className="text-slate-600">
                                You pick the place, price, date, and type of event,
                                and we’ll provide you with a curated schedule of The Big Apple.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* heading of list item 3 */}
                        <div className="rounded-l-full bg-cyan-600 md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-cyan-600">
                                    03
                                </div>
                                <h3 className="text-base font-bold text-white md:mb-4 md:hidden">
                                    All in One
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg text-white font-bold md:block">
                                All in One
                            </h3>
                            <p className="text-slate-600">
                                You pick the place, price, date, and type of event,
                                and we’ll provide you with a curated schedule of The Big Apple.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
