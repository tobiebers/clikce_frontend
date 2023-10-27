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
    <div className="navbar navbar-expand-lg navbar-light bg-light background-color-secondary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src="logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className="text-center">
          <span className="mx-4">Contact</span>
          <span className="mx-4">Funktionen</span>
          <span className="mx-4">Pläne</span>
        </div>
        <div className="mt-2">
          <button className="btn1">Login</button>
          <button className="btn2">Registrieren</button>
        </div>
      </div>
      <button
        className={`navbar-toggler ${isOpen ? 'open' : ''}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="nav-list">
      </ul>
    </div>
  );
}
