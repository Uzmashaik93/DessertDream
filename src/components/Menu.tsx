import React from "react";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <section id="menu" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Delicious Menu</h2>
      <div className="flex justify-center flex-wrap">
        <div className="w-80 m-4">
          <img src="cake.jpg" alt="Cake" className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Chocolate Cake</h3>
          <p>Rich chocolate cake with creamy frosting.</p>
        </div>
        <div className="w-80 m-4">
          <img
            src="cookies.jpg"
            alt="Cookies"
            className="w-full rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Oatmeal Cookies</h3>
          <p>Warm and chewy oatmeal cookies.</p>
        </div>
        <div className="w-80 m-4">
          <img
            src="pastries.jpg"
            alt="Pastries"
            className="w-full rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Fruit Tart</h3>
          <p>Fresh fruit tart with a flaky crust.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
