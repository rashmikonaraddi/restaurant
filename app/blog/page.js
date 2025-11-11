"use client";

import { useState } from "react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="bg-[#f8f8f8] text-[#222]">
 <section className="relative w-full h-[450px] mt-[90px]">
        <img
          src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/30 flex flex-col justify-center items-center text-black">
          <h1 className="text-5xl font-bold mb-3">Blog Standard</h1>
          <p className="text-lg">
            <span className="hover:text-red-500 cursor-pointer">Home</span> › Blog
          </p>
        </div>
      </section>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-[90px] bg-white flex items-center justify-between px-[30px] z-50 shadow-md">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"
          alt="Logo"
          className="h-[65px] w-[150px] object-contain"
        />
        <nav className="hidden md:flex gap-[30px] text-[15px] font-semibold">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/pages" className="hover:text-red-500">Pages</a>
          <a href="/menu" className="hover:text-red-500">Menu</a>
          <a href="/blog" className="hover:text-red-500">Blog</a>
          <a href="/shop" className="hover:text-red-500">Shop</a>
        </nav>
        <div className="flex items-center gap-[20px]">
          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            alt="Cart"
            className="h-[40px] w-[40px]"
          />
          <button className="bg-red-600 hover:bg-red-700 px-[20px] py-[8px] rounded-full text-white font-bold text-[14px] transition">
            Reservation
          </button>
        </div>
      </header>


      {/* BLOG POSTS STACKED */}
      <div className="max-w-[800px] mx-auto px-[20px] py-[40px] flex flex-col gap-[40px]">

        {/* Blog 1 */}
        <div className="bg-white shadow p-[25px] rounded-[10px]">
          <img src="https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg"
           className="w-full h-[250px] object-cover mb-[15px]" />
          <p className="text-[14px] text-gray-500 mb-[8px]">13 August, 2024 | Admin</p>
          <h3 className="text-[20px] font-semibold mb-[10px]">This prefabricated passive house highly</h3>
          <p className="text-[14px] text-gray-600 mb-[15px]">
            Endjudences diminution so discovered mr apartments. Are off under folly death wrote cause her way spite...
          </p>
          <button className="bg-[#d12f2f] text-white px-[16px] py-[8px] text-[14px] rounded-[6px]">Read More</button>
        </div>

        {/* Blog 2 */}
        <div className="bg-white shadow p-[25px] rounded-[10px]">
          <img src="https://t3.ftcdn.net/jpg/17/34/27/74/360_F_1734277421_NlkecsxVf14VazO5hEHDK1euI0BTyD9O.jpg"
           className="w-full h-[250px] object-cover mb-[15px]" />
          <p className="text-[14px] text-gray-500 mb-[8px]">14 August, 2024 | John Baus</p>
          <h3 className="text-[20px] font-semibold mb-[10px]">Overcame breeding point concerns has</h3>
          <p className="text-[14px] text-gray-600 mb-[15px]">
            Brudulgence disinvolviced ero rt apartments. Are cf under folly death wrote cause her way spice...
          </p>
          <button className="bg-[#d12f2f] text-white px-[16px] py-[8px] text-[14px] rounded-[6px]">Read More</button>
        </div>

        {/* Blog 3 */}
        <div className="bg-white shadow p-[25px] rounded-[10px]">
          <img src="https://t3.ftcdn.net/jpg/03/02/00/02/360_F_302000253_7QLZiEIkLZiJn9iVHMAf4Prfu49Eno6l.jpg" 
          className="w-full h-[250px] object-cover mb-[15px]" />
          <p className="text-[14px] text-gray-500 mb-[8px]">12 August, 2024 | John Baus</p>
          <h3 className="text-[20px] font-semibold mb-[10px]">Picked up a Brussels burger Sprouts</h3>
          <p className="text-[14px] text-gray-600 mb-[15px]">
            Boutique diminution dis discovered mr apartments. Are off under folly death wrote cause her way spite...
          </p>
          <button className="bg-[#d12f2f] text-white px-[16px] py-[8px] text-[14px] rounded-[6px]">Read More</button>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-[8px] pb-[40px]">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-[10px] py-[6px] border rounded text-[13px] ${
              currentPage === num ? "bg-[#d12f2f] text-white" : "hover:bg-gray-200"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => (prev < 6 ? prev + 1 : 1))}
          className="px-[10px] py-[6px] border rounded text-[13px] hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>

      
      {/* FOOTER */}
<footer className="bg-[#1a1a1a] text-white pt-[50px] pb-[30px] px-[25px] mt-[40px]">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">

    {/* About Us */}
    <div>
      <h3 className="text-[18px] font-bold mb-[15px]">About Us</h3>
      <p className="text-[13px] text-gray-300 leading-[22px] mb-[20px]">
        Conduct at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
      </p>
      <div className="flex gap-[12px]">
        <img src="/facebook-icon.png" className="h-[24px] w-[24px]" />
        <img src="/twitter-icon.png" className="h-[24px] w-[24px]" />
        <img src="/linkedin-icon.png" className="h-[24px] w-[24px]" />
        <img src="/youtube-icon.png" className="h-[24px] w-[24px]" />
      </div>
    </div>

    {/* Explore */}
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

    {/* Contact Info */}
    <div>
      <h3 className="text-[18px] font-bold mb-[15px]">Contact Info</h3>
      <p className="text-[13px] text-gray-300 mb-[10px]">175 10th Street, Office 375 Berlin, De 21542</p>
      <p className="text-[13px] text-gray-300 mb-[5px]">+123 3456789</p>
      <p className="text-[13px] text-gray-300 mb-[5px]">+534 3456789</p>
      <p className="text-[13px] text-gray-300">food@restan.com</p>
    </div>

    {/* Newsletter */}
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

  {/* Bottom Line */}
  <div className="text-center text-[12px] text-gray-400 mt-[40px]">
    © Copyright 2025. Restan. All Rights Reserved.
  </div>
</footer>
    </div>
  );
}