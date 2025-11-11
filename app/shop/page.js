"use client";

export default function Shop() {
  return (
    <div className="bg-[#f8f8f8] text-[#222]">

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

      {/* BANNER */}
      <div className="relative w-full h-[450px] mt-[90px]">
        <img
          src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
          className="w-full h-full object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-white/40 flex flex-col justify-center items-center">
          <h1 className="text-[32px] font-bold">Special Food</h1>
          <p className="text-[14px] mt-[6px]">Home &gt; Shop</p>
        </div>
      </div>

      {/* FOOD GRID */}
      <div className="max-w-[1200px] mx-auto px-[17px] py-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
        {/* Repeat this block for each item — all 8 items below */}
        {/* CHEESE PIZZA */}
        <div className="bg-white p-[15px] shadow rounded-[7px]">
          <img src="https://img.thecdn.in/167599/1648038909299_SKU-0529_0.jpg?format=webp"
           className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">CHEESE PIZZA</h3>
          <p className="text-[13px] text-gray-500">Margherita Pizza</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$12.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">ADD TO CART</button>
        </div>

        {/* CREAMY BURGER */}
        <div className="bg-white p-[15px] shadow rounded-[7px] relative">
          <div className="absolute top-[10px] left-[10px] bg-[#d12f2f] text-white text-[11px] px-[6px] py-[2px] rounded-[3px]">SALE</div>
          <img src="https://www.chowhound.com/img/gallery/make-your-hamburger-luxuriously-creamy-with-a-simple-cheese-swap/intro-1731716733.jpg" 
          className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">CREAMY BURGER</h3>
          <p className="text-[13px] text-gray-500">Margherita Pizza</p>
          <p className="text-[13px] line-through text-gray-400">$50.00</p>
          <p className="text-[#d12f2f] font-bold">$30.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">ADD TO CART</button>
        </div>

        {/* GRILLED FLANK STEAK */}
        <div className="bg-white p-[15px] shadow rounded-[7px]">
          <img src="https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=0&k=20&c=svqnTZV_l7DP0QPCG8L_-f6k7LuBUA-cH9wiL8eJqUs=" 
          className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">GRILLED FLANK STEAK</h3>
          <p className="text-[13px] text-gray-500">Grilled Flank Steak</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$25.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">ADD TO CART</button>
        </div>

        {/* BBQ MEAT */}
        <div className="bg-white p-[15px] shadow rounded-[7px]">
          <img src="https://media.istockphoto.com/id/472719534/photo/grill.jpg?s=612x612&w=0&k=20&c=-3LPZ4JrPUsI3gche2FvCrwu1Seis1e_AnBuyIWUQNY=" 
          className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">BBQ Meat</h3>
          <p className="text-[13px] text-gray-500">Barbecue Chicken</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$20.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">ADD TO CART</button>
        </div>

        {/* VEGETABLE ROLL */}
        <div className="bg-white p-[15px] shadow rounded-[7px]">
          <img src="https://manjulaskitchen.com/wp-content/uploads/vegetable_kathi_roll.jpg"
           className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">Vegetable Roll</h3>
          <p className="text-[13px] text-gray-500">Food, Roll</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$25.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">Add to Cart</button>
        </div>

        {/* CREAMY PASTA */}
        <div className="bg-white p-[15px] shadow rounded-[7px] relative">
          <div className="absolute top-[10px] left-[10px] bg-[#d12f2f] text-white text-[11px] px-[6px] py-[2px] rounded-[3px]">SALE</div>
          <img src="https://www.shutterstock.com/image-photo/penne-pasta-carbonara-cream-sauce-600nw-1724358589.jpg" 
          className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">Creamy Pasta</h3>
          <p className="text-[13px] text-gray-500">Pasta, Spicy</p>
          <p className="text-[13px] line-through text-gray-400">$23.00</p>
          <p className="text-[#d12f2f] font-bold">$18.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">Add to Cart</button>
        </div>

        {/* CHICKEN SHAWARMA */}
        <div className="bg-white p-[15px] shadow rounded-[7px]">
          <img src="https://t4.ftcdn.net/jpg/14/58/92/45/360_F_1458924540_A7SjCOLHxyf97aw2swUn15HPsrPWUG1S.jpg"
           className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">Chicken Shawarma</h3>
          <p className="text-[13px] text-gray-500">Meat, Shawarma</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$20.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">Add to Cart</button>
        </div>

        {/* SUBMARINE SANDWICH */}
        <div className="bg-white p-[15px] shadow rounded-[7px]">
          <img src="https://media.istockphoto.com/id/619637254/photo/two-fresh-submarine-sandwiches.jpg?s=612x612&w=0&k=20&c=5WtuqMq6eYFognGqc7wkGUspHxcKNWr-rV2rkAegM7g=" 
          className="w-full h-[160px] object-cover mb-[10px]" />
          <h3 className="text-[17px] font-semibold">Submarine Sandwich</h3>
          <p className="text-[13px] text-gray-500">Sandwich, Chicken</p>
          <p className="text-[#d12f2f] font-bold mt-[5px]">$6.00</p>
          <button className="mt-[10px] bg-[#d12f2f] text-white px-[12px] py-[6px] text-[13px] rounded-[5px]">Add to Cart</button>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-[10px] pb-[40px]">
        <button className="px-[10px] py-[5px] border rounded bg-[#d12f2f] text-white text-[13px]">1</button>
        <button className="px-[10px] py-[5px] border rounded hover:bg-gray-200 text-[13px]">2</button>
        <button className="px-[10px] py-[5px] border rounded hover:bg-gray-200 text-[13px]">3</button>
        <button className="px-[10px] py-[5px] border rounded hover:bg-gray-200 text-[13px]">Next</button>
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