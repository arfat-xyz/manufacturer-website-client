import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-black text-white">
      <div>
        <p>Copyright © {year} - All right reserved by Arfatur Rahman</p>
      </div>
    </footer>
  );
};

export default Footer;
