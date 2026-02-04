const NavBar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto max-w-4xl p-4 bg-white shadow-lg rounded-4xl flex items-center justify-between z-50">
      <div className="text-xl ml-5 font-extrabold  text-gray-800">
        FRONTEND 2
      </div>

      <div className="flex items-center bg-gray-100 p-2 rounded-4xl w-1/3">
        <input
          type="text"
          className="bg-transparent outline-none w-full px-2 text-gray-600 placeholder-gray-400"
          placeholder="Procurar..."
        />
      </div>
    </nav>
  );
};

export default NavBar;
