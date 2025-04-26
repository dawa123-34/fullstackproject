import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D47A1] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} ThahaX. All rights reserved.</p>
        <p>Developed by Dawa Dorje Tamang</p>
      </div>
    </footer>
  );
};

export default Footer;
