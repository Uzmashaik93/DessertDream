function Detail() {
  return (
    <div className="md:flex md:justify-evenly gap-10 p-7 md:p-20 min-w-screen min-h-screen">
      <div className="flex-1">
        <img src="/details.png" alt="" />
      </div>
      <div className="hidden md:flex flex-col justify-center items-center px-6">
        {/* Top Line */}
        <div className="w-[3px] h-28 bg-orange-200 rounded-full shimmer-border" />

        {/* Cupcake Icon */}
        <div className="my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="pink"
            className="animate-bounce drop-shadow-lg"
          >
            <path d="M12 2c-1.355 0-2.591.539-3.536 1.464-.872.865-1.373 1.95-1.448 3.051C5.41 7.01 4 8.599 4 10.5c0 1.447.92 2.735 2.292 3.185l.455 5.466A2.003 2.003 0 0 0 8.74 21h6.52a2.003 2.003 0 0 0 1.993-1.849l.455-5.466A3.503 3.503 0 0 0 20 10.5c0-1.901-1.41-3.49-3.016-3.985-.075-1.101-.576-2.186-1.448-3.051A4.985 4.985 0 0 0 12 2z" />
          </svg>
        </div>

        {/* Bottom Line */}
        <div className="w-[3px] h-28 bg-orange-200 rounded-full shimmer-border" />
      </div>
      <div className="flex-1">
        <p className="text-3xl font-semibold mb-7 mt-6 md:mt-0">
          Looking for fresh, homemade cake for your special event?
        </p>
        <p className="p-2 text-lg">
          We specialize in crafting delicious cakes and cupcakes that are
          perfect for any occasion. Whether you’re celebrating a special
          milestone or just indulging in a sweet treat, we offer a variety of
          freshly baked options that are sure to delight. <br />
          <br />
          At Dessert Dream By Namita, we take pride in creating custom cakes and
          cupcakes that are as beautiful as they are delicious. From classic
          designs like rich chocolate cakes to personalized cupcakes for
          birthdays, weddings, and more — we’ve got something for everyone.
          Handcrafted with Love We believe in using only the finest ingredients,
          ensuring that every bite is as fresh and flavorful as possible.
          Whether it’s a decadent layered cake or a batch of perfectly frosted
          cupcakes, each dessert is made with care and attention to detail.
        </p>
        <p className="p-7 text-gray-500">
          <span className="font-bold">Order Your Sweet Treats Today!</span>
          <br />
          <p className="text-gray-400">
            Placing an order is simple! Contact us directly via phone or email,
            and we’ll help you choose the perfect cake or cupcakes for your
            special occasion. From custom designs to simple everyday
            indulgences, we’re here to bring your dessert dreams to life.
          </p>
        </p>
        <p className="text-2xl text-right">𝙁𝙊𝙐𝙉𝘿𝙀𝙍 | 𝒩𝒶𝓂𝒾𝓉𝒶</p>
      </div>
    </div>
  );
}

export default Detail;
