"use client";

import React, { useState } from 'react';

export default function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300'>
            
            <div className="relative h-[750px] flex flex-col items-center mx-[5px]">
                
                <div className="fixed top-0 left-0 w-full h-[90px] bg-white dark:bg-gray-900 flex flex-row items-center justify-between px-4 md:px-10 z-50 shadow-md transition-colors duration-300">
                    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75" 
                         alt="Burger" 
                         className="h-[80px] w-[200px] rounded-[20px] object-contain"
                    />
                    
                    <div className="hidden md:flex gap-3 font-bold text-black dark:text-white text-lg">
                        <a href="/home" className="font-bold hover:text-red-600 ml-[40px] text-md mt-2.5 mr-[10]">Home</a>
                        <a href="/about" className="font-bold hover:text-red-600 ml-[40px] text-md mt-2.5 mr-[10]">About Us</a>
                        <a href="/menu" className="font-bold hover:text-red-600 ml-[40px] text-md mt-2.5 mr-[10]">Menu</a>
                        <a href="/blog" className="font-bold hover:text-red-600 ml-[40px] text-md mt-2.5 mr-[10]">Blog</a>
                        <a href="/shop" className="font-bold hover:text-red-600 ml-[40px] text-md mt-2.5 mr-[10]">Shop</a>
                    </div>


                    <button 
                        className="md:hidden p-2 text-black dark:text-white text-3xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>


                {isMenuOpen && (
                    <div className="md:hidden fixed top-[90px] left-0 w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center z-40 pb-4 border-t border-gray-200 dark:border-gray-700">
                        <a href="/home" className="block p-3 font-bold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">Home</a>
                        <a href="/pages" className="block p-3 font-bold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">Pages</a>
                        <a href="/menu" className="block p-3 font-bold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">Menu</a>
                        <a href="/blog" className="block p-3 font-bold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">Blog</a>
                        <a href="/shop" className="block p-3 font-bold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-center">Shop</a>
                    </div>
                )}


                <div className="w-full pt-[90px] relative">
                    <img
                        src="https://t3.ftcdn.net/jpg/15/39/19/92/360_F_1539199267_Lmn39oDcNE0ADsEUVYxo6IrzvhOGyLrP.jpg"
                        alt="Hero Background"
                        className="w-full h-[720px] rounded-[0px] md:rounded-[50px] md:p-[80px] object-cover"
                    />
                    

                    <div className="absolute top-1/2 left-6 md:left-20 transform -translate-y-1/2 z-10 text-left max-w-lg">
                        <h1 className="text-white font-extrabold uppercase text-5xl md:text-7xl drop-shadow-2xl leading-none mb-4">
                            Premium <br/> Taste.
                        </h1>
                        <p className="text-white text-xl md:text-2xl drop-shadow-lg font-semibold">
                            Crafted for the true burger lover.
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-row w-full justify-between items-center mt-20">
                <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-6 md:px-20 w-full transition-colors duration-300">
                    <div className="text-center mb-16">
                        <h3 className="text-red-500 uppercase tracking-widest font-semibold flex justify-center items-center gap-2">
                            <span className="h-[1px] w-8 bg-red-500"></span>
                            About Us
                            <span className="h-[1px] w-8 bg-red-500"></span>
                        </h3>
                        <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                            The best burgers offer a <br /> combination of tastes.
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <img
                            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXky05V7yLpXTLuP3JUMQ375X2ukUO2hvhVr-275ZzYjcHoyuf"
                            alt="Burger"
                            className="rounded-[20px] w-full h-[500px] object-cover"
                        />
                        
                        <div>
                            <div className="space-y-10 p-2">
                                <div className="bg-red-600 flex flex-col justify-center items-center rounded-[15px] p-8 text-center text-white">
                                    <h2 className="text-5xl font-bold mb-2">18+</h2>
                                    <p className="text-lg font-medium">Types Of Burger</p>
                                </div>
                            </div>
                            <div className="space-y-10 p-2">
                                <img src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=" alt="small burger" className="rounded-[15px]"/>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                New had happen unable uneasy. Drawings can followed improved out
                                sociable not. Earnestly so do instantly pretended. See general few
                                civilly amiable pleased account carried. Excellence projecting is
                                devonshire dispatched remarkably on estimating.
                            </p>

                            <div className="space-y-5">
                                <div className="border border-gray-700 dark:border-gray-600 p-2 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2"> Online Food Delivery</h3>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        Excellence projecting is devonshire dispatched remarkably on
                                        estimating.
                                    </p>
                                </div>

                                <div className="border border-gray-700 dark:border-gray-600 p-2 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-2"> Authentic Food</h3>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        Regularity projecting is devonshire dispatched remarkably on
                                        estimating.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div className="w-full py-10 bg-[#f2f0ec] dark:bg-gray-950 mt-12 transition-colors duration-300">
                <div className="flex justify-center items-center mb-8">
                    <div className="border-t border-red-600 w-16"></div>
                    <span className="mx-4 text-red-600 font-bold uppercase tracking-widest text-xl">Our Special</span>
                    <div className="border-t border-red-600 w-16"></div>
                </div>
                <h2 className="text-center text-3xl font-bold mb-6 dark:text-white">Popular Burger</h2>
                <div className="flex flex-wrap justify-center gap-10 px-6">
                    

                    <div className="group rounded-xl bg-white dark:bg-gray-800 py-8 px-5 w-[310px] text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div>
                            <img src="https://media.istockphoto.com/id/511484502/photo/double-cheese-and-bacon-cheeseburger.jpg?s=612x612&w=0&k=20&c=aJkQqm34Gv-UDJSX3bBNfHpV3W740ft3bITVJvS-5PM=" 
                            alt="Hamburger" 
                            className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
                        </div>
                        <div className="text-2xl font-semibold mb-1 dark:text-white">Hamburger</div>
                        <div className="flex justify-center gap-2 items-center mb-2">
                            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                            <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $12 </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
                    </div>


                    <div className="group rounded-xl bg-white dark:bg-gray-800 py-8 px-5 w-[310px] text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/previews/049/350/247/non_2x/a-delicious-double-chicken-burger-isolated-on-transparent-background-png.png" 
                            alt="Chicken Burger" 
                            className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
                        </div>
                        <div className="text-2xl font-semibold mb-1 dark:text-white">Chicken Burger.</div>
                        <div className="flex justify-center gap-2 items-center mb-2">
                            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                            <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $16 </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
                    </div>


                    <div className="group rounded-xl bg-white dark:bg-gray-800 py-8 px-5 w-[310px] text-center shadow-xl border-2 border-red-200 dark:border-red-800 hover:border-red-400 hover:shadow-2xl transition-all duration-300 scale-105 z-10 hover:-translate-y-2">
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/037/320/707/small/ai-generated-hamburger-flying-on-white-background-neural-network-generatedrealistic-image-photo.jpg"
                                alt="Cheese Burger" 
                                className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
                        </div>
                        <div className="text-2xl font-semibold mb-1 dark:text-white">Cheese Burger</div>
                        <div className="flex justify-center gap-2 items-center mb-2">
                            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                            <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $25 </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
                    </div>


                    <div className="group rounded-xl bg-white dark:bg-gray-800 py-8 px-5 w-[310px] text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <div>
                            <img src="https://img.freepik.com/premium-photo/bacon-cheeseburger-with-white-background-high-quality_889056-97595.jpg"
                                alt="Bacon Burger" 
                                className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
                        </div>
                        <div className="text-2xl font-semibold mb-1 dark:text-white">Bacon Burger</div>
                        <div className="flex justify-center gap-2 items-center mb-2">
                            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                            <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $18 </span>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
                    </div>
                </div>
            </div>



            <div className="w-full py-10 bg-[#f2f0ec] dark:bg-gray-950 transition-colors duration-300">

                <div className="flex justify-center items-center mb-4">
                    <div className="border-t border-red-600 w-12"></div>
                    <h2 className="mx-3 text-red-600 font-bold uppercase tracking-widest text-lg">Popular Menu</h2>
                    <div className="border-t border-red-600 w-12"></div>
                </div>
                <h3 className="text-center text-2xl font-bold mb-8 dark:text-white">Latest Food Items</h3>


                <div className="flex flex-col md:flex-row justify-center gap-10 px-6">

                    <div className="space-y-8 w-full md:w-[440px]">
                        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-5 w-full">
                            <img src="https://thumbs.dreamstime.com/b/chicken-burger-isolated-white-background-classic-lettuce-cheese-sauce-tomato-design-element-cheeseburger-side-view-375463813.jpg" 
                            alt="Classic Chicken" className="w-[100px] h-[100px] object-cover rounded mr-5" />
                            <div>
                                <h4 className="text-lg font-bold text-red-600">Classic Chicken <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
                                <p className="text-sm text-black dark:text-gray-300 mt-1">Ricotta / goat cheese / beetroot</p>
                                <p className="text-red-600 font-bold mt-2">$35</p>
                            </div>
                        </div>

                        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-5 w-full">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-delicious-burger-with-many-ingredients-isolated-on-white-background-tasty-cheeseburger-image_3581699.jpg" 
                            alt="Cheese Burger"
                            className="w-[100px] h-[100px] object-cover rounded mr-5" />
                            <div>
                                <h4 className="text-lg font-bold text-red-600">Cheese Burger</h4>
                                <p className="text-sm text-black dark:text-gray-300 mt-1">Atlantic / chips / salad / tartare</p>
                                <p className="text-red-600 font-bold mt-2">$42</p>
                            </div>
                        </div>

                        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-5 w-full">
                            <img src="https://png.pngtree.com/png-clipart/20250209/original/pngtree-grilled-chicken-burger-png-image_20398143.png"
                            alt="Grilled Chicken" 
                            className="w-[100px] h-[100px] object-cover rounded mr-5" />
                            <div>
                                <h4 className="text-lg font-bold text-red-600">Grilled Chicken
                                <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
                                <p className="text-sm text-black dark:text-gray-300 mt-1">Truffle mash / pepper sauce</p>
                                <p className="text-red-600 font-bold mt-2">$28</p>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-8 w-full md:w-[440px]">
                        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-5 w-full">
                            <img src="https://thumbs.dreamstime.com/b/classic-margherita-pizza-close-up-bubbling-mozzarella-cheese-fresh-green-basil-leaves-tomato-sauce-delicious-italian-cuisine-367509167.jpg" 
                            alt="Margherita Pizza"
                            className="w-[100px] h-[100px] object-cover rounded mr-5" />
                            <div>
                                <h4 className="text-lg font-bold text-red-600">Margherita Pizza 
                                    <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
                                <p className="text-sm text-black dark:text-gray-300 mt-1">Ricotta / goat cheese / beetroot</p>
                                <p className="text-red-600 font-bold mt-2">$15</p>
                            </div>
                        </div>

                        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-5 w-full">
                            <img src="https://thumbs.dreamstime.com/b/delicious-pepperoni-pizza-cheesy-topping-crispy-crust-transparent-png-background-generative-ai-mouth-watering-pepperoni-381152991.jpg"
                            alt="Pepperoni Pizza" 
                            className="w-[100px] h-[100px] object-cover rounded mr-5" />
                            <div>
                                <h4 className="text-lg font-bold text-red-600">Pepperoni Pizza
                                    <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
                                <p className="text-sm text-black dark:text-gray-300 italic">Atlantic / chips / salad / tartare</p>
                                <p className="text-red-600 font-bold mt-2">$29</p>
                            </div>
                        </div>

                        <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow p-5 w-full">
                            <img src="https://img.freepik.com/premium-photo/delicious-barbecue-pizza-isolated-white-background_787273-34481.jpg" 
                            alt="BBQ Chicken Pizza"
                            className="w-[100px] h-[100px] object-cover rounded mr-5" />
                            <div>
                                <h4 className="text-lg font-bold text-red-600">BBQ Chicken Pizza</h4>
                                <p className="text-sm text-black dark:text-gray-300 italic">Truffle mash / pepper sauce</p>
                                <p className="text-red-600 font-bold mt-2">$45</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
                

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <h1 className="text-[120px] md:text-[200px] font-serif text-gray-100 dark:text-gray-800 opacity-60 font-bold select-none absolute -top-10 left-0 md:left-10 leading-none">
                        RESTAN
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center mt-12">
                    

                    <div className="w-full lg:w-3/5 h-[400px] md:h-[500px] shadow-2xl bg-black relative z-10">

                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/pQbwB5KNjpQ?si=BkBAFxAw2kpOlV1h&controls=0&rel=0"                         
                              title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="object-cover w-full h-full"
                        >
                          
                        </iframe>
                    </div>


                    <div className="w-full lg:w-2/5 bg-white dark:bg-gray-800 p-8 md:p-12 shadow-2xl relative z-20 mt-[-40px] lg:mt-0 lg:-ml-20">
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
                            Opening Hours
                        </h2>
                        
                        <p className="text-gray-500 dark:text-gray-300 mb-8 leading-relaxed">
                            A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. 
                            The Patio Time Bar opens in the center.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="font-bold text-gray-800 dark:text-gray-200">Sunday To Tuesday:</span>
                                <span className="font-bold text-gray-900 dark:text-white">10:00 - 09:00</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="font-bold text-gray-800 dark:text-gray-200">Wednesday To Thursday:</span>
                                <span className="font-bold text-gray-900 dark:text-white">11:30 - 10:30</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span className="font-bold text-gray-800 dark:text-gray-200">Friday & Saturday:</span>
                                <span className="font-bold text-gray-900 dark:text-white">10:30 - 12:00</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-4">
                            <div className="bg-red-600 rounded-full p-3 text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Call Anytime</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">+964733-378901</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
          
          
            <footer className="bg-[#1a1a1a] text-white pt-[50px] pb-[30px] px-[25px] mt-[40px]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">

                    <div>
                        <h3 className="text-[18px] font-bold mb-[15px]">About Us</h3>
                        <p className="text-[13px] text-gray-300 leading-[22px] mb-[20px]">
                            Conduct at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                        </p>
                        <div className="flex gap-[12px]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" className="h-[24px] w-[24px]" alt="Facebook" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP2zCRBxeiQJi5uZFLh_3E8_kWqe2Z2i8FQ&s" className="h-[24px] w-[24px]" alt="Twitter" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" className="h-[24px] w-[24px]" alt="LinkedIn" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" className="h-[24px] w-[24px]" alt="YouTube" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-bold mb-[15px]">Explore</h3>
                        <ul className="space-y-[8px] text-[13px] text-gray-300">
                            <li><a href="#" className="hover:text-red-500">Company Profile</a></li>
                            <li><a href="#" className="hover:text-red-500">About</a></li>
                            <li><a href="#" className="hover:text-red-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-red-500">Career</a></li>
                            <li><a href="#" className="hover:text-red-500">Features</a></li>
                            <li><a href="#" className="hover:text-red-500">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-bold mb-[15px]">Contact Info</h3>
                        <p className="text-[13px] text-gray-300 mb-[10px]">175 10th Street, Office 375 Berlin, De 21542</p>
                        <p className="text-[13px] text-gray-300 mb-[5px]">+123 3456789</p>
                        <p className="text-[13px] text-gray-300 mb-[5px]">+534 3456789</p>
                        <p className="text-[13px] text-gray-300">food@restan.com</p>
                    </div>

                    <div>
                        <h3 className="text-[18px] font-bold mb-[15px]">Newsletter</h3>
                        <p className="text-[13px] text-gray-300 mb-[15px]">
                            Join our subscribers list to get the latest news and special offers.
                        </p>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-[10px] py-[8px] rounded-[4px] text-black text-[13px] mb-[10px]"
                        />
                        <label className="flex items-center gap-[8px] text-[12px] text-gray-300">
                            <input type="checkbox" />
                            I agree to the Privacy Policy
                        </label>
                    </div>
                </div>

                <div className="text-center text-[12px] text-gray-400 mt-[40px]">
                    © Copyright 2025. Restan. All Rights Reserved.
                </div>
            </footer>

        </div>
    );
}