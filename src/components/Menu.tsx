import Hero from "./Hero";
import menu from "/menu.jpeg";

function Menu() {
  return (
    <section>
      <div>
        <Hero
          height="h-70"
          padding="py-17"
          heading={
            <>
              <h1 className="text-xl font-bold mb-4 text-orange-300 text-center opacity-0 animate-slide-in-left">
                Dessert Dream By Namita - Freshly baked with the finest
                ingredients.
              </h1>
            </>
          }
        />
      </div>
      <div className="w-full flex justify-center items-center py-30 px-4 md:px-20">
        <img
          src={menu}
          alt="Menu"
          className="max-w-full h-auto md:max-w-4xl shadow-xl rounded-lg"
        />
      </div>
    </section>
  );
}

export default Menu;
