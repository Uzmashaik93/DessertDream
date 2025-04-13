function Detail() {
  return (
    <div className="md:flex md:justify-evenly gap-5 p-7 md:p-20 min-w-screen min-h-screen">
      <div className="flex-1">
        <img src="/details.png" alt="" />
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
