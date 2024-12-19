import Link from "next/link";
import SignInOut from "./auth/SIgnInOut";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-wrap justify-between items-center pt-4 pb-8">
        <div className="nav-brand ">
          <Link href="/">
            <div className="flex items-center space-x-2">
              {/* Icon */}
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M12 2a4 4 0 11-4 4 4 4 0 014-4zm-5.5 12.5A3.5 3.5 0 103 18a3.5 3.5 0 003.5-3.5zM16.5 9a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0016.5 9zM8.22 13.78a.75.75 0 00-.44.66v3a.75.75 0 001.5 0v-1.96l2.72 1.94a.75.75 0 00.56.12.75.75 0 00.38-.31L16.27 14h1.23a.75.75 0 000-1.5h-3a.75.75 0 00-.56.25l-3 3.28-2.28-1.61v-.71a.75.75 0 00-.44-.66z" />
                </svg>
              </div>
              {/* Text */}
              <span className="text-2xl font-bold text-white">Gatherly</span>
            </div>
          </Link>
        </div>

        <ul className="flex justify  gap-4 font-semibold text-[#9C9C9C]  cursor-pointer ">
          <li className="hover:text-pink-400 ">
            <SignInOut />
          </li>
          <li className="hover:text-pink-400  ">About</li>
          <li className="hover:text-pink-400  ">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
