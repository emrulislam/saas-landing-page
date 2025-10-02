import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Header() {
  const [active, setActive] = useState("#home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = ["#home", "#features", "#pricing", "#testimonials"];

  // Scroll spy to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";
      sections.forEach((section) => {
        const el = document.querySelector(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = section;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatSection = (section) =>
    section.replace("#", "").replace(/^./, (c) => c.toUpperCase());

  return (
    <div className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50 px-4 sm:px-6 lg:px-12">
      {/* Navbar content */}
      <div className="navbar py-2">
        {/* Left: Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown relative lg:hidden">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-2 w-52 absolute left-0">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={section}
                      onClick={() => setDropdownOpen(false)}
                      className={active === section ? "text-primary font-bold" : ""}
                    >
                      {formatSection(section)}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold text-primary"
          >
            SaaSify
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            {sections.map((section, idx) => (
              <li key={idx}>
                <a
                  href={section}
                  className={active === section ? "text-primary font-bold" : ""}
                >
                  {formatSection(section)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA Button */}
        <div className="navbar-end">
          <a
            href="#pricing"
            className="btn btn-primary rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
