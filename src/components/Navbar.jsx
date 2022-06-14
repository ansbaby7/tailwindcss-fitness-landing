const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="bg-gray-900 flex justify-between items-center">
        <a href="/#" className="text-gray-200 text-5xl my-2 pb-1 ml-2">FITNESS</a>
        <div className="mr-2">
          <a href="/#" className="uppercase mx-2 text-stone-200">
            About
          </a>
          <a href="/#" className="uppercase mx-2 text-stone-200">
            Trainers
          </a>
          <a href="/#" className="uppercase mx-2 text-stone-200">
            Pricing
          </a>
          <a href="/#" className="uppercase mx-2 text-stone-200">
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
