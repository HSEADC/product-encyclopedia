import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="O_MenuMob header">
      <a href="../index.html" className="logo">
        <img src="../images/A_LogotypeMob.svg" alt="" />
      </a>
      {/* Hamburger icon */}
      <input
        className="side-menu"
        type="checkbox"
        id="side-menu"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label className="hamb" htmlFor="side-menu">
        <span className={`hamb-line ${isOpen ? 'active' : ''}`}></span>
      </label>
      {/* Menu */}
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li>
            <a href="./research.html" className="A_MenuItem_non-active">
              Исследование
            </a>
          </li>
          <li>
            <a href="./define.html" className="A_MenuItem_non-active">
              Определение
            </a>
          </li>
          <li>
            <a href="./develop.html" className="A_MenuItem_non-active">
              Разработка
            </a>
          </li>
          <li>
            <a href="./deliver.html" className="A_MenuItem_non-active">
              Реализация
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
