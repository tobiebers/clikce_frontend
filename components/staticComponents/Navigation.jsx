import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.querySelector(".nav-list");
    if (isOpen) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  }, [isOpen]);

  return (
    <div className="navbar success theme-text">
      <div
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        id="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/designSite">Design</a></li>

      </ul>
    </div>
  )
}
