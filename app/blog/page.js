"use client";

export default function Blog() {
  return (

    <div className="bg-[#f8f8f8] text-[#222] dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      

      <header className="fixed top-0 left-0 w-full h-[90px] bg-white dark:bg-gray-900 flex items-center justify-between px-[30px] z-50 shadow-md transition-colors duration-300">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"
          alt="Logo"
          className="h-[65px] w-[150px] object-contain"
        />
        <nav className="hidden md:flex gap-[30px] text-[15px] font-semibold text-gray-800 dark:text-white">
          <a href="/" className="hover:text-red-500 transition-colors">Home</a>
          <a href="/about" className="hover:text-red-500 transition-colors">About Us</a>
          <a href="/menu" className="hover:text-red-500 transition-colors">Menu</a>
          <a href="/blog" className="hover:text-red-500 transition-colors">Blog</a>
          <a href="/shop" className="hover:text-red-500 transition-colors">Shop</a>
        </nav>
        
        <div className="flex items-center gap-[20px]">
          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            alt="Cart"
            className="h-[40px] w-[40px] rounded-full"
          />
          <button className="bg-red-600 hover:bg-red-700 px-[20px] py-[8px] rounded-full text-white font-bold text-[14px] transition">
            Reservation
          </button>
        </div>
      </header>


      <section className="relative w-full h-[450px] mt-[90px]">
        <img
          src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />


        <div className="absolute inset-0 bg-white/30 dark:bg-black/50 flex flex-col justify-center items-center text-black dark:text-white backdrop-blur-[2px]">
          <h1 className="text-5xl font-bold mb-3 drop-shadow-md">Blog</h1>
          <p className="text-lg font-medium">
            <span className="hover:text-red-500 cursor-pointer transition-colors">Home</span> › Blog
          </p>
        </div>
      </section>


      <div className="max-w-[800px] mx-auto px-[20px] py-[40px] flex flex-col gap-[40px]">


        <div className="bg-white dark:bg-gray-800 shadow p-[25px] rounded-[10px] transition-colors duration-300">
          <img src="https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg"
            className="w-full h-[250px] object-cover mb-[15px] rounded" alt="Post 1" />
          <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-[8px]">13 August, 2024 | Admin</p>
          <h3 className="text-[20px] font-semibold mb-[10px] text-gray-900 dark:text-white">This prefabricated passive house highly</h3>
          <p className="text-[14px] text-gray-600 dark:text-gray-300 mb-[15px]">
            Endjudences diminution so discovered mr apartments. Are off under folly death wrote cause her way spite...
          </p>
          <button className="bg-[#d12f2f] hover:bg-red-700 text-white px-[16px] py-[8px] text-[14px] rounded-[6px] transition">Read More</button>
        </div>


        <div className="bg-white dark:bg-gray-800 shadow p-[25px] rounded-[10px] transition-colors duration-300">
          <img src="https://t3.ftcdn.net/jpg/17/34/27/74/360_F_1734277421_NlkecsxVf14VazO5hEHDK1euI0BTyD9O.jpg"
            className="w-full h-[250px] object-cover mb-[15px] rounded" alt="Post 2" />
          <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-[8px]">14 August, 2024 | John Baus</p>
          <h3 className="text-[20px] font-semibold mb-[10px] text-gray-900 dark:text-white">Overcame breeding point concerns has</h3>
          <p className="text-[14px] text-gray-600 dark:text-gray-300 mb-[15px]">
            Brudulgence disinvolviced ero rt apartments. Are cf under folly death wrote cause her way spice...
          </p>
          <button className="bg-[#d12f2f] hover:bg-red-700 text-white px-[16px] py-[8px] text-[14px] rounded-[6px] transition">Read More</button>
        </div>


        <div className="bg-white dark:bg-gray-800 shadow p-[25px] rounded-[10px] transition-colors duration-300">
          <img src="https://t3.ftcdn.net/jpg/03/02/00/02/360_F_302000253_7QLZiEIkLZiJn9iVHMAf4Prfu49Eno6l.jpg"
            className="w-full h-[250px] object-cover mb-[15px] rounded" alt="Post 3" />
          <p className="text-[14px] text-gray-500 dark:text-gray-400 mb-[8px]">12 August, 2024 | John Baus</p>
          <h3 className="text-[20px] font-semibold mb-[10px] text-gray-900 dark:text-white">Picked up a Brussels burger Sprouts</h3>
          <p className="text-[14px] text-gray-600 dark:text-gray-300 mb-[15px]">
            Boutique diminution dis discovered mr apartments. Are off under folly death wrote cause her way spite...
          </p>
          <button className="bg-[#d12f2f] hover:bg-red-700 text-white px-[16px] py-[8px] text-[14px] rounded-[6px] transition">Read More</button>
        </div>
      </div>


      <div className="flex justify-center items-center gap-[10px] pb-[40px]">
        <button className="px-[10px] py-[5px] border border-transparent rounded bg-[#d12f2f] text-white text-[13px]">1</button>
        <button className="px-[10px] py-[5px] border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-[13px] dark:text-white transition">2</button>
        <button className="px-[10px] py-[5px] border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-[13px] dark:text-white transition">3</button>
        <button className="px-[10px] py-[5px] border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-[13px] dark:text-white transition">Next</button>
      </div>


      <footer className="bg-[#1a1a1a] text-white pt-[50px] pb-[30px] px-[25px] mt-[40px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">

          <div>
            <h3 className="text-[18px] font-bold mb-[15px]">About Us</h3>
            <p className="text-[13px] text-gray-300 leading-[22px] mb-[20px]">
              Conduct at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
            </p>
            <div className="flex gap-[12px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" className="h-[24px] w-[24px]" alt="fb" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP2zCRBxeiQJi5uZFLh_3E8_kWqe2Z2i8FQ&s" className="h-[24px] w-[24px]" alt="x" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" className="h-[24px] w-[24px]" alt="in" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" className="h-[24px] w-[24px]" alt="yt" />
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-[15px]">Explore</h3>
            <ul className="space-y-[8px] text-[13px] text-gray-300">
              <li><a href="#" className="hover:text-red-500 transition">Company Profile</a></li>
              <li><a href="#" className="hover:text-red-500 transition">About</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Career</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Features</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
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
              className="w-full px-[10px] py-[8px] rounded-[4px] text-black text-[13px] mb-[10px] outline-none focus:ring-2 focus:ring-red-500"
            />
            <label className="flex items-center gap-[8px] text-[12px] text-gray-300 cursor-pointer">
              <input type="checkbox" className="accent-red-500" />
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