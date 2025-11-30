"use client";

export default function About() {
  return (

    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">


      <header className="fixed top-0 left-0 w-full h-[90px] bg-white dark:bg-gray-900 flex items-center justify-between px-10 z-50 shadow-md transition-colors duration-300">
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

        <div className="flex items-center gap-5">
          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            alt="Cart"
            className="h-[40px] w-[40px] rounded-full"
          />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white font-bold transition">
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
          <h1 className="text-5xl font-bold mb-3 drop-shadow-md">About Us</h1>
          <p className="text-lg font-medium">
            <span className="hover:text-red-500 cursor-pointer transition-colors">Home</span> About Us
          </p>
        </div>
      </section>


      <section className="py-16 px-6 md:px-20 bg-[#f7f5f0] dark:bg-gray-800 transition-colors duration-300">

        <div className="text-center mb-14">
          <h3 className="uppercase tracking-widest text-yellow-800 dark:text-yellow-500 font-semibold flex items-center justify-center gap-4">
            <span className="h-[1px] w-10 bg-yellow-800 dark:bg-yellow-500"></span>
            Our Trusted & Happy Partners
            <span className="h-[1px] w-10 bg-yellow-800 dark:bg-yellow-500"></span>
          </h3>
        </div>


        <div className="flex flex-wrap items-center justify-center gap-14 opacity-90">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={`https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F${num}.png&w=1080&q=75`}
              className="h-20 object-contain dark:brightness-0 dark:invert transition-all duration-300" 
              alt="Partner Brand"
            />
          ))}
        </div>
      </section>


      <section className="bg-[#f5f3ef] dark:bg-gray-900 py-20 px-6 md:px-24 relative overflow-hidden transition-colors duration-300">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          

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


          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-10 relative transition-colors duration-300">

            <img
              src="https://cdn-icons-png.flaticon.com/512/686/686589.png"
              className="absolute top-[-40px] right-[-40px] w-24 opacity-30 dark:invert"
              alt="Food Art"
            />


            <p className="text-yellow-800 dark:text-yellow-500 uppercase text-sm font-semibold tracking-widest flex items-center gap-3">
              About Us
              <span className="h-[1px] w-12 bg-yellow-800 dark:bg-yellow-500"></span>
            </p>


            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-gray-900 dark:text-white">
              We Invite You <br />To Visit Our Restaurant
            </h2>


            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-6">
              A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
              The Patio Time Bar is located in the center of the city. Inspired by
              the charm of the 1960s, our space gives an experience you'll enjoy
              remembering.
            </p>


            <button className="mt-10 bg-yellow-800 hover:bg-yellow-900 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition px-8 py-3 rounded-md text-white font-semibold">
              Discover More
            </button>
          </div>
        </div>
      </section>


      <section className="py-20 bg-[#f7f5f0] dark:bg-gray-800 px-6 md:px-20 text-center transition-colors duration-300">

        <h3 className="uppercase tracking-widest text-yellow-800 dark:text-yellow-500 font-semibold flex items-center justify-center gap-4 mb-3">
          <span className="h-[1px] w-10 bg-yellow-800 dark:bg-yellow-500"></span>
          Master Chefs
          <span className="h-[1px] w-10 bg-yellow-800 dark:bg-yellow-500"></span>
        </h3>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-14">
          Meet Our Special Chefs
        </h2>


        <div className="grid md:grid-cols-3 gap-12">

          <div className="relative flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-full border-[6px] border-gray-300 dark:border-gray-600 p-2 flex items-center justify-center transition-colors duration-300">
              <img
                src="https://media.istockphoto.com/id/1142230160/photo/beautiful-chef-working-in-a-kitchen-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=a_e524ohK5mfy8Ef2QyeENKQHShv7z6vv-ZztCUCeCc="
                className="w-full h-full rounded-full object-cover"
                alt="Alexander Petllo"
              />
            </div>
            <div className="bg-yellow-800 dark:bg-yellow-700 text-white px-6 py-3 rounded-md mt-[-20px] w-[85%] shadow-lg">
              <h3 className="text-xl font-bold">Alexander Petllo</h3>
              <p className="text-sm opacity-90">ASSISTANT CHEF</p>
            </div>
          </div>


          <div className="relative flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-full border-[6px] border-gray-300 dark:border-gray-600 p-2 flex items-center justify-center transition-colors duration-300">
              <img
                src="https://www.totaljobs.com/advice/wp-content/uploads/Sous-Chef-job-description_5719402.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Mendia Juxef"
              />
            </div>
            <div className="bg-yellow-800 dark:bg-yellow-700 text-white px-6 py-3 rounded-md mt-[-20px] w-[85%] shadow-lg">
              <h3 className="text-xl font-bold">Mendia Juxef</h3>
              <p className="text-sm opacity-90">BURGER KING</p>
            </div>
          </div>


          <div className="relative flex flex-col items-center">
            <div className="w-[260px] h-[260px] rounded-full border-[6px] border-gray-300 dark:border-gray-600 p-2 flex items-center justify-center transition-colors duration-300">
              <img
                src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg?semt=ais_hybrid&w=740&q=80"
                className="w-full h-full rounded-full object-cover"
                alt="Petro William"
              />
            </div>
            <div className="bg-yellow-800 dark:bg-yellow-700 text-white px-6 py-3 rounded-md mt-[-20px] w-[85%] shadow-lg">
              <h3 className="text-xl font-bold">Petro William</h3>
              <p className="text-sm opacity-90">MAIN CHEF</p>
            </div>
          </div>
        </div>
      </section>



      <footer className="bg-[#1a1a1a] text-white pt-[50px] pb-[30px] px-[25px] mt-[40px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">


          <div>
            <h3 className="text-[18px] font-bold mb-[15px]">About Us</h3>
            <p className="text-[13px] text-gray-300 leading-[22px] mb-[20px]">
              Conduct at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
            </p>
           <div className="flex gap-[12px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png" 
              className="h-[24px] w-[24px]" 
              alt="fb" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP2zCRBxeiQJi5uZFLh_3E8_kWqe2Z2i8FQ&s" 
              className="h-[24px] w-[24px]" alt="x" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png"
               className="h-[24px] w-[24px]" alt="in" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" 
              className="h-[24px] w-[24px]" alt="yt" />
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