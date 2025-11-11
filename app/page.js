export default function Landing(){
    return(
        <div className='bg-white-100 light:bg-white-900'>
        <div className="  item center h-[750px] items-center bg-white brown-relative flex flex-col mx-[5px]">
<div className="fixed top-0 left-0 w-full h-[90px] bg-white flex flex-row items-center justify-between px-10 z-50">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75" 
                  alt="Burger" 
                  className="h-[80px] w-[200px] rounded-[20px] absolute top-0 left-0-translate x-1/2-translate-y-0"
                  />
                    <div className="absolute top-10 left-100 transform -translate-x-5 flex gap-3 font-bold text-black text-lg">
              <a
               href="/home"
                className="hidden md:block font-bold text-black ml-[40px] text-md mt-2.5 mr-[10]">
                  Home
                </a>
              <a
               href="/pages"
                className="hidden md:block font-bold text-black ml-[40px] text-md mt-2.5 mr-[10]">
                  Pages
                </a>
            <a
               href="/menu"
                className="hidden md:block font-bold text-black ml-[40px] text-md mt-2.5 mr-[10]">
                  Menu
                </a>
                     <a
               href="/blog"
                className="hidden md:block font-bold text-black ml-[40px] text-md mt-2.5 mr-[10]">
                  Blog
                </a>
                     <a
               href="/shop"
                className="hidden md:block font-bold text-black ml-[40px] text-md mt-2.5 mr-[10]">
                  Shop
                </a>
             
              </div>
              


            </div>
< div className="hidden md:block flex-row ">
        <img
          src="https://t3.ftcdn.net/jpg/15/39/19/92/360_F_1539199267_Lmn39oDcNE0ADsEUVYxo6IrzvhOGyLrP.jpg"
          alt="icon"
          

            className="w-full h-[720px] rounded-[50px] p-[80px] "></img>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkJKXf3DfCK2v2swZI2Rq_vThDdilo-90I5W4NxIJVNdzxKRfQ"
            alt="Overlay"
            width={400}
            height={400}
            className="absolute top-1/2 left-3-translate x-1-translate-y-1 "/>


            <div className="flex flex-row h-[20%] mt-30 w-full justify-between items-center">
    
    <section className="bg-white text-black py-20 px-6 md:px-20">
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
    <div className="bg-red-600 flex flex-col justify-center items-center rounded-[15px] p-8 text-center">
            <h2 className="text-5xl font-bold mb-2">18+</h2>
            <p className="text-lg font-medium">Types Of Burger</p>
            </div>

    </div>
    <div className="space-y-10 p-2">
      <img src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="/>
    </div>
  </div>
          
          <div>
            <p className="text-gray-300 leading-relaxed mb-8">
              New had happen unable uneasy. Drawings can followed improved out
              sociable not. Earnestly so do instantly pretended. See general few
              civilly amiable pleased account carried. Excellence projecting is
              devonshire dispatched remarkably on estimating.
            </p>

            <div className="space-y-5">
              <div className="border border-gray-700 p-2 ">
                <h3 className="text-xl font-semibold mb-2"> Online Food Delivery</h3>
                <p className="text-gray-400">
                  Excellence projecting is devonshire dispatched remarkably on
                  estimating.
                </p>
              </div>

              <div className="border border-gray-700 p-2">
                <h3 className="text-xl font-semibold mb-2"> Authentic Food</h3>
                <p className="text-gray-400">
                  Regularity projecting is devonshire dispatched remarkably on
                  estimating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>


{/* Special Burger Section */}
        <div className="w-full py-10 bg-[#f2f0ec] mt-12">
  <div className="flex justify-center items-center mb-8">
    <div className="border-t border-red-600 w-16"></div>
    <span className="mx-4 text-red-600 font-bold uppercase tracking-widest text-xl">Our Special</span>
    <div className="border-t border-red-600 w-16"></div>
  </div>
  <h2 className="text-center text-3xl font-bold mb-6">Popular Burger</h2>
  <div className="flex flex-wrap justify-center gap-10 px-6">
    {/* Hamburger */}
    <div className="group rounded-xl bg-white py-8 px-5 w-[310px] text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div>
        <img src="https://media.istockphoto.com/id/511484502/photo/double-cheese-and-bacon-cheeseburger.jpg?s=612x612&w=0&k=20&c=aJkQqm34Gv-UDJSX3bBNfHpV3W740ft3bITVJvS-5PM=" 
        alt="Hamburger" 
        className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
      </div>
      <div className="text-2xl font-semibold mb-1">Hamburger</div>
      <div className="flex justify-center gap-2 items-center mb-2">
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $12 </span>
      </div>
      <div className="text-gray-600 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
    </div>
    {/* Chicken Burger */}
    <div className="group rounded-xl bg-white py-8 px-5 w-[310px] text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/049/350/247/non_2x/a-delicious-double-chicken-burger-isolated-on-transparent-background-png.png" 
        alt="Chicken Burger" 
        className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
      </div>
      <div className="text-2xl font-semibold mb-1">Chicken Burger.</div>
      <div className="flex justify-center gap-2 items-center mb-2">
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $16 </span>
      </div>
      <div className="text-gray-600 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
    </div>
    {/* Cheese Burger */}
    <div className="group rounded-xl bg-white py-8 px-5 w-[310px] text-center shadow-xl border-2 border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300 scale-105 z-10 hover:-translate-y-2">
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/037/320/707/small/ai-generated-hamburger-flying-on-white-background-neural-network-generatedrealistic-image-photo.jpg"
         alt="Cheese Burger" 
         className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
      </div>
      <div className="text-2xl font-semibold mb-1">Cheese Burger</div>
      <div className="flex justify-center gap-2 items-center mb-2">
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $25 </span>
      </div>
      <div className="text-gray-600 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
    </div>
    {/* Bacon Burger */}
    <div className="group rounded-xl bg-white py-8 px-5 w-[310px] text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div>
        <img src="https://img.freepik.com/premium-photo/bacon-cheeseburger-with-white-background-high-quality_889056-97595.jpg"
         alt="Bacon Burger" 
         className="mx-auto mb-4 rounded-[16px] h-[130px] object-contain"/>
      </div>
      <div className="text-2xl font-semibold mb-1">Bacon Burger</div>
      <div className="flex justify-center gap-2 items-center mb-2">
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 bg-red-600 text-white rounded-lg px-4 py-1 font-bold text-lg group-hover:bg-red-700 transition"> $18 </span>
      </div>
      <div className="text-gray-600 text-sm mt-1">The hamburger is the original and the best-known burger to date</div>
    </div>
  </div>
</div>





<div className="w-full py-10 bg-[#f2f0ec]">
  {/* Section Title */}
  <div className="flex justify-center items-center mb-4">
    <div className="border-t border-red-600 w-12"></div>
    <h2 className="mx-3 text-red-600 font-bold uppercase tracking-widest text-lg">Popular Menu</h2>
    <div className="border-t border-red-600 w-12"></div>
  </div>
  <h3 className="text-center text-2xl font-bold mb-8">Latest Food Items</h3>

  {/* Two Columns */}
  <div className="flex justify-center gap-10 px-6">
    {/* Left Column - Burgers */}
    <div className="space-y-8">
      <div className="flex bg-white rounded-lg shadow p-5 w-[440px]">
        <img src="https://thumbs.dreamstime.com/b/chicken-burger-isolated-white-background-classic-lettuce-cheese-sauce-tomato-design-element-cheeseburger-side-view-375463813.jpg" 
        alt="Classic Chicken" className="w-[200px] h-[200px] object-cover rounded mr-5" />
        <div>
          <h4 className="text-lg font-bold text-red-600">Classic Chicken <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
          <p className="text-sm text-black mt-1">Ricotta / goat cheese / beetroot</p>
          <p className="text-red-600 font-bold mt-2">$35</p>
        </div>
      </div>

      <div className="flex bg-white rounded-lg shadow p-5 w-[440px]">
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-delicious-burger-with-many-ingredients-isolated-on-white-background-tasty-cheeseburger-image_3581699.jpg" 
        alt="Cheese Burger"
         className="w-[200px] h-[200px] object-cover rounded mr-5" />
        <div>
          <h4 className="text-lg font-bold text-red-600">Cheese Burger</h4>
          <p className="text-sm text-black mt-1">Atlantic / chips / salad / tartare</p>
          <p className="text-red-600 font-bold mt-2">$42</p>
        </div>
      </div>

      <div className="flex bg-white rounded-lg shadow p-5 w-[440px]">
        <img src="https://png.pngtree.com/png-clipart/20250209/original/pngtree-grilled-chicken-burger-png-image_20398143.png"
         alt="Grilled Chicken" 
         className="w-[200px] h-[200px] object-cover rounded mr-5" />
        <div>
          <h4 className="text-lg font-bold text-red-600">Grilled Chicken
          <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
          <p className="text-sm text-black mt-1">Truffle mash / pepper sauce</p>
          <p className="text-red-600 font-bold mt-2">$28</p>
        </div>
      </div>
    </div>

    {/* Right Column - Pizzas */}
    <div className="space-y-8">
      <div className="flex bg-white rounded-lg shadow p-5 w-[440px]">
        <img src="https://thumbs.dreamstime.com/b/classic-margherita-pizza-close-up-bubbling-mozzarella-cheese-fresh-green-basil-leaves-tomato-sauce-delicious-italian-cuisine-367509167.jpg" 
        alt="Margherita Pizza"
         className="w-[200px] h-[200px] object-cover rounded mr-5" />
        <div>
          <h4 className="text-lg font-bold text-red-600">Margherita Pizza 
            <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
          <p className="text-sm text-black mt-1">Ricotta / goat cheese / beetroot</p>
          <p className="text-red-600 font-bold mt-2">$15</p>
        </div>
      </div>

      <div className="flex bg-white rounded-lg shadow p-5 w-[440px]">
        <img src="https://thumbs.dreamstime.com/b/delicious-pepperoni-pizza-cheesy-topping-crispy-crust-transparent-png-background-generative-ai-mouth-watering-pepperoni-381152991.jpg"
         alt="Pepperoni Pizza" 
        className="w-[200px] h-[200px] object-cover rounded mr-5" />
        <div>
          <h4 className="text-lg font-bold text-red-600">Pepperoni Pizza
             <span className="bg-red-600 text-white text-xs px-2 py-[2px] rounded ml-1">MUST TRY</span></h4>
          <p className="text-sm text-black italic">Atlantic / chips / salad / tartare</p>
          <p className="text-red-600 font-bold mt-2">$29</p>
        </div>
      </div>

      <div className="flex bg-white rounded-lg shadow p-5 w-[440px]">
        <img src="https://img.freepik.com/premium-photo/delicious-barbecue-pizza-isolated-white-background_787273-34481.jpg" 
        alt="BBQ Chicken Pizza"
         className="w-[200px] h-[200px] object-cover rounded mr-5" />
        <div>
          <h4 className="text-lg font-bold text-red-600">BBQ Chicken Pizza</h4>
          <p className="text-sm text-black italic">Truffle mash / pepper sauce</p>
          <p className="text-red-600 font-bold mt-2">$45</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
    );
  }