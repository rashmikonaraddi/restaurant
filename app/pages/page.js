"use client";

export default function About() {
  return (
    <div className="bg-white text-gray-800">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full h-[90px] bg-white flex items-center justify-between px-10 z-50 shadow-md">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"
          alt="Logo"
          className="h-[65px] w-[150px] object-contain"
        />

        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          {["Home", "Pages", "Menu", "Blog", "Shop"].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-red-500">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            alt="Cart"
            className="h-[40px] w-[40px]"
          />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white font-bold transition">
            Reservation
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full h-[450px] mt-[90px]">
        <img
          src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/30 flex flex-col justify-center items-center text-black">
          <h1 className="text-5xl font-bold mb-3">About Us</h1>
          <p className="text-lg">
            <span className="hover:text-red-500 cursor-pointer">Home</span> › About Us
          </p>
        </div>
      </section>
      {/* PARTNERS SECTION */}
<section className="py-16 px-6 md:px-20 bg-[#f7f5f0]">

  {/* Title */}
  <div className="text-center mb-14">
    <h3 className="uppercase tracking-widest text-yellow-800 font-semibold flex items-center justify-center gap-4">
      <span className="h-[1px] w-10 bg-yellow-800"></span>
      Our Trusted & Happy Partners
      <span className="h-[1px] w-10 bg-yellow-800"></span>
    </h3>
  </div>

  {/* Logos Row */}
  <div className="flex flex-wrap items-center justify-center gap-14 opacity-90">

    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"
      className="h-20 object-contain"
      alt="Partner Brand"
    />

    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"
      className="h-20 object-contain"
      alt="Partner Brand"
    />

    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"
      className="h-20 object-contain"
      alt="Partner Brand"
    />

    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"
      className="h-20 object-contain"
      alt="Partner Brand"
    />

    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"
      className="h-20 object-contain"
      alt="Partner Brand"
    />

  </div>
</section>


   {/* ABOUT INVITATION SECTION */}
<section className="bg-[#f5f3ef] py-20 px-6 md:px-24 relative overflow-hidden">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* Left Side Images */}
    <div className="flex gap-5">
      <img
        src="https://aaft.com/blog/wp-content/uploads/2024/09/pikaso_texttoimage_Steps-to-Becoming-a-Professional-Chef-in-India.jpeg"
        alt="Chef Serving"
        className="w-1/2 h-[420px] object-cover rounded-xl shadow-lg"
      />

      <img
        src="https://images.stockcake.com/public/5/f/4/5f4ede64-27d8-4f54-9965-4b159fa5bbad_large/confident-professional-chef-stockcake.jpg"
        alt="Waitress Serving"
        className="w-1/2 h-[420px] object-cover rounded-xl shadow-lg"
      />
    </div>

    {/* Right Content Box */}
    <div className="bg-white rounded-xl shadow-xl p-10 relative">
      
      {/* Decorative Fish Image Top Right */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/686/686589.png"
        className="absolute top-[-40px] right-[-40px] w-24 opacity-30"
        alt="Food Art"
      />

      {/* Subtitle */}
      <p className="text-yellow-800 uppercase text-sm font-semibold tracking-widest flex items-center gap-3">
        About Us
        <span className="h-[1px] w-12 bg-yellow-800"></span>
      </p>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-gray-900">
        We Invite You <br />To Visit Our Restaurant
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed mt-6">
        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
        The Patio Time Bar is located in the center of the city. Inspired by
        the charm of the 1960s, our space gives an experience you'll enjoy
        remembering.
      </p>

      {/* Button */}
      <button className="mt-10 bg-yellow-800 hover:bg-yellow-900 transition px-8 py-3 rounded-md text-white font-semibold">
        Discover More
      </button>
    </div>

  </div>
</section>



{/* CHEFS SECTION */}
<section className="py-20 bg-[#f7f5f0] px-6 md:px-20 text-center">
  
  {/* Title */}
  <h3 className="uppercase tracking-widest text-yellow-800 font-semibold flex items-center justify-center gap-4 mb-3">
    <span className="h-[1px] w-10 bg-yellow-800"></span>
    Master Chefs
    <span className="h-[1px] w-10 bg-yellow-800"></span>
  </h3>

  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
    Meet Our Special Chefs
  </h2>

  {/* Chef Cards */}
  <div className="grid md:grid-cols-3 gap-12">

    {/* Chef 1 */}
    <div className="relative flex flex-col items-center">
      <div className="w-[260px] h-[260px] rounded-full border-[6px] border-gray-300 p-2 flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/chef-holds-burger-wooden-table_763111-14570.jpg"
          className="w-full h-full rounded-full object-cover"
          alt="Alexander Petllo"
        />
      </div>

      <div className="bg-yellow-800 text-white px-6 py-3 rounded-md mt-[-20px] w-[85%]">
        <h3 className="text-xl font-bold">Alexander Petllo</h3>
        <p className="text-sm">ASSISTANT CHEF</p>
      </div>
    </div>

    {/* Chef 2 */}
    <div className="relative flex flex-col items-center">
      <div className="w-[260px] h-[260px] rounded-full border-[6px] border-gray-300 p-2 flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/woman-cooking-ai-generated_860599-14162.jpg"
          className="w-full h-full rounded-full object-cover"
          alt="Mendia Juxef"
        />
      </div>

      <div className="bg-yellow-800 text-white px-6 py-3 rounded-md mt-[-20px] w-[85%]">
        <h3 className="text-xl font-bold">Mendia Juxef</h3>
        <p className="text-sm">BURGER KING</p>
      </div>
    </div>

    {/* Chef 3 */}
    <div className="relative flex flex-col items-center">
      <div className="w-[260px] h-[260px] rounded-full border-[6px] border-gray-300 p-2 flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-photo/chef-cooking-kitchen_763111-1525.jpg"
          className="w-full h-full rounded-full object-cover"
          alt="Petro William"
        />
      </div>

      <div className="bg-yellow-800 text-white px-6 py-3 rounded-md mt-[-20px] w-[85%]">
        <h3 className="text-xl font-bold">Petro William</h3>
        <p className="text-sm">MAIN CHEF</p>
      </div>
    </div>

  </div>
</section>
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
