"use client";

export default function Shop() {
  return (

<div className="bg-[#f8f8f8] text-[#222] dark:bg-gray-900 dark:text-white transition-colors duration-300">


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


      <div className="relative w-full h-[450px] mt-[90px]">
        <img
          src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50 flex flex-col justify-center items-center backdrop-blur-[2px]">
          <h1 className="text-[32px] font-bold text-gray-900 dark:text-white">Shop</h1>
          <p className="text-[14px] mt-[6px] text-gray-800 dark:text-gray-200">Home &gt; Shop</p>
        </div>
      </div>


      <div className="max-w-[1200px] mx-auto px-[17px] py-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] transition-colors duration-300">
          <img src="https://img.thecdn.in/167599/1648038909299_SKU-0529_0.jpg?format=webp"
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Pizza" />
          <h3 className="text-[17px] font-semibold dark:text-white">CHEESE PIZZA</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Margherita Pizza</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$12.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] relative transition-colors duration-300">
          <div className="absolute top-[10px] left-[10px] bg-[#d12f2f] text-white text-[11px] px-[6px] py-[2px] rounded-[3px]">SALE</div>
          <img src="https://www.chowhound.com/img/gallery/make-your-hamburger-luxuriously-creamy-with-a-simple-cheese-swap/intro-1731716733.jpg"
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Burger" />
          <h3 className="text-[17px] font-semibold dark:text-white">CREAMY BURGER</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Margherita Pizza</p>
          <p className="text-[13px] line-through text-gray-400">$50.00</p>
          <p className="text-[#d12f2f] font-bold">$30.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] transition-colors duration-300">
          <img src="https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=0&k=20&c=svqnTZV_l7DP0QPCG8L_-f6k7LuBUA-cH9wiL8eJqUs="
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Steak" />
          <h3 className="text-[17px] font-semibold dark:text-white">GRILLED FLANK STEAK</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Grilled Flank Steak</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$25.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] transition-colors duration-300">
          <img src="https://media.istockphoto.com/id/472719534/photo/grill.jpg?s=612x612&w=0&k=20&c=-3LPZ4JrPUsI3gche2FvCrwu1Seis1e_AnBuyIWUQNY="
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="BBQ" />
          <h3 className="text-[17px] font-semibold dark:text-white">BBQ Meat</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Barbecue Chicken</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$20.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] transition-colors duration-300">
          <img src="https://manjulaskitchen.com/wp-content/uploads/vegetable_kathi_roll.jpg"
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Roll" />
          <h3 className="text-[17px] font-semibold dark:text-white">Vegetable Roll</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Food, Roll</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$25.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] relative transition-colors duration-300">
          <div className="absolute top-[10px] left-[10px] bg-[#d12f2f] text-white text-[11px] px-[6px] py-[2px] rounded-[3px]">SALE</div>
          <img src="https://www.shutterstock.com/image-photo/penne-pasta-carbonara-cream-sauce-600nw-1724358589.jpg"
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Pasta" />
          <h3 className="text-[17px] font-semibold dark:text-white">Creamy Pasta</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Pasta, Spicy</p>
          <p className="text-[13px] line-through text-gray-400">$23.00</p>
          <p className="text-[#d12f2f] font-bold">$18.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] transition-colors duration-300">
          <img src="https://t4.ftcdn.net/jpg/14/58/92/45/360_F_1458924540_A7SjCOLHxyf97aw2swUn15HPsrPWUG1S.jpg"
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Shawarma" />
          <h3 className="text-[17px] font-semibold dark:text-white">Chicken Shawarma</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Meat, Shawarma</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$20.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>


        <div className="bg-white dark:bg-gray-800 p-[15px] shadow rounded-[7px] transition-colors duration-300">
          <img src="https://media.istockphoto.com/id/619637254/photo/two-fresh-submarine-sandwiches.jpg?s=612x612&w=0&k=20&c=5WtuqMq6eYFognGqc7wkGUspHxcKNWr-rV2rkAegM7g="
            className="w-full h-[160px] object-cover mb-[10px] rounded" alt="Sandwich" />
          <h3 className="text-[17px] font-semibold dark:text-white">Submarine Sandwich</h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">Sandwich, Chicken</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$6.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px] hover:bg-red-700 transition">ADD TO CART</button>
        </div>
      </div>


      <div className="flex justify-center items-center gap-[10px] pb-[40px]">
        <button className="px-[10px] py-[5px] border border-gray-300 dark:border-gray-600 rounded bg-[#d12f2f] text-white text-[13px]">1</button>
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