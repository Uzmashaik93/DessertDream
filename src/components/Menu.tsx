import menu from "/menu.jpeg";

function Menu() {
  return (
    <div className="w-full flex justify-center items-center py-30 px-4 md:px-20">
      <img
        src={menu}
        alt="Menu"
        className="max-w-full h-auto md:max-w-4xl shadow-xl rounded-lg"
      />
    </div>
  );
}

export default Menu;
