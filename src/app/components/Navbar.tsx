
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <span className="ml-3 text-xl font-semibold">Hekto</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Pages</a>
          <a className="mr-5 hover:text-gray-900">Products</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
          <a className="mr-5 hover:text-gray-900">Shop</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <input type="text" placeholder="search here" className="w-[200px]"></input>
        <IoSearchOutline />
      </div>
    </header>
  );
};

export default Navbar;
