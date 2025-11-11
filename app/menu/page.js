"use client";

export default function Menu() {
  const foodItems = [
    {
      img: "https://canadiancookingadventures.com/wp-content/uploads/2024/05/441163273_1922851371491143_5124665708453297860_n-720x720.jpg",
      title: "Spicy Ramen",
      desc: "Hot & delicious Japanese noodle soup.",
    },
    {
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
      title: "Grilled Steak",
      desc: "Perfectly seasoned tender steak.",
    },
    {
      img: "https://png.pngtree.com/thumb_back/fw800/background/20241126/pngtree-picture-of-a-sushi-platter-with-variety-rolls-and-nigiri-image_16649134.jpg",
      title: "Sushi Platter",
      desc: "Fresh rolls with premium seafood.",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800",
      title: "Cheese Burger",
      desc: "Juicy grilled burger with melted cheese.",
    },
  ];

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
          <h1 className="text-5xl font-bold mb-3">Restaurant Food Menu</h1>
          <p className="text-lg">
            <span className="hover:text-red-500 cursor-pointer">Home</span> › Menu
          </p>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="bg-gray-100 py-20 px-6 md:px-20 text-center">
        <h3 className="uppercase tracking-widest text-gray-600 font-semibold">––– Category –––</h3>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Choose Your Best Food</h2>

        <div className="grid md:grid-cols-4 gap-8 mt-14">
          {foodItems.map((item, index) => (
            <div key={index} className="bg-white border p-4 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src={item.img} className="h-[250px] w-full object-cover rounded-xl" alt={item.title} />
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white font-bold transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY BANNER */}
      <section className="relative w-full h-[450px]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/037/245/929/non_2x/ai-generated-fast-delivery-advertisment-background-with-copy-space-free-photo.jpg"
          className="w-full h-full object-cover"
          alt="Delivery"
        />

        <div className="absolute inset-0 flex flex-col justify-center pl-[10%] text-gray-900">
          <h1 className="text-5xl font-bold mb-4">30 Minutes Delivery</h1>
          <p className="text-lg font-semibold max-w-xl leading-relaxed">
            A relaxing and pleasant atmosphere with dinner & cocktails — inspired by 1960s Italy.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-bold transition">
            Order Now
          </button>
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