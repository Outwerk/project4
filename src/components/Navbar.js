import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#111827] p-6 2xl:px-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Icon
        </div>
        <div className="text-white text-2xl font-bold">
          App Name
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
