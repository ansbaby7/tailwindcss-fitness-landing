import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <nav className="bg-gray-900">
        <div className=" flex justify-between items-center">
          <a href="/#" className="text-gray-200 text-5xl my-2 pb-1 ml-2">
            FITNESS
          </a>
          <div className="md:hidden text-gray-100 mr-2">
            <button onClick={handleClick}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="mr-2 hidden md:block">
            <a href="#about" className="uppercase mx-2 text-stone-200 hover:text-gray-50">
              About
            </a>
            <a href="#trainers" className="uppercase mx-2 text-stone-200 hover:text-gray-50">
              Trainers
            </a>
            <a href="#pricing" className="uppercase mx-2 text-stone-200 hover:text-gray-50">
              Pricing
            </a>
            <a href="#contact" className="uppercase mx-2 text-stone-200 hover:text-gray-50">
              Contact Us
            </a>
          </div>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <div className={!isOpen ? "hidden" : "flex flex-col items-center"}>
            <a href="#about" className="uppercase my-2 text-stone-200 hover:text-gray-50">
              About
            </a>
            <a href="#trainers" className="uppercase my-2 text-stone-200 hover:text-gray-50">
              Trainers
            </a>
            <a href="#pricing" className="uppercase my-2 text-stone-200 hover:text-gray-50">
              Pricing
            </a>
            <a href="#contact" className="uppercase my-2 text-stone-200 hover:text-gray-50">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
