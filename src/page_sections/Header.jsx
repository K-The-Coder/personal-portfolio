import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsOpen(false);
      }
    }

    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    }
  }, [isOpen])

  return (
    <header>
      <div className="logo">KM</div>
      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        ref={toggleRef}
      >
        &#9776;
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#hero-section">Home</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#projects-section">Projects</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className={`mobile-nav-bar ${isOpen ? "open" : ""}`} ref={navRef}>
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="close-nav-bar-button"
        >
          &#10005;
        </span>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <a href="#hero-section">Home</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#about-section">About</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#projects-section">Projects</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
