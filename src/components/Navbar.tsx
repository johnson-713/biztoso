import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Biztoso</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
          <li><Link to="/marketplace" className="hover:text-gray-300">Marketplace</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
