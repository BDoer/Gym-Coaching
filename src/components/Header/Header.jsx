import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  // Track if the screen is mobile-sized
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  
  // Track whether the mobile menu is open
  const [open, setOpen] = useState(false);

  // Update 'mobile' state on window resize
  useEffect(() => {
    const resize = () => {
      const isMobile = window.innerWidth <= 768;
      setMobile(isMobile);
      if (!isMobile) setOpen(false); // Close menu when switching to desktop
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Closes the mobile menu after clicking a link
  const closeMenu = () => mobile && setOpen(false);

  // Navigation menu items
  const navItems = [
    { to: "hero", label: "Home" },
    { to: "programs", label: "Programs" },
    { to: "plans", label: "Plans" },
    { to: "Testimonials", label: "Testimonials" },
    { to: "reasons", label: "Why us" },
  ];

  return (
    <div className="header">
      {/* Logo */}
      <img src={Logo} alt="logo" className="logo" />

      {/* Mobile: show bars icon if menu is closed */}
      {mobile && !open ? (
        <div className="menu-icon" onClick={() => setOpen(true)}>
          <img src={Bars} alt="menu" style={{ width: "1.5rem" }} />
        </div>
      ) : (
        // Desktop OR open mobile menu
        <ul className="header-menu">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                spy
                onClick={closeMenu} // Close menu on click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
