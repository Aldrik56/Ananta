import React, { useState, useEffect } from 'react';
import { useResolvedPath, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Dropdown'); // Initial button text
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const resolvedPath = useResolvedPath();

  useEffect(() => {
    const path = resolvedPath.pathname;
    console.log(resolvedPath.pathname);
    const dropdownItems = [
      { path: '/', text: 'Hari Pelaksanaan' },
      { path: '/behind-the-scene', text: 'Dibalik Kepanitiaan' },
      { path: '/divisi', text: 'Foto Divisi' },
      { path: '/sayembara', text: 'Sayembara Visual' },
      { path: '/after-movie#', text: 'After Movie' },
    ];

    const matchingItem = dropdownItems.find(item => path === item.path); // Use exact string comparison
    if (matchingItem) {
      setButtonText(matchingItem.text);
    } else {
      setButtonText('Dropdown');
    }
  }, [resolvedPath.pathname]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="navbar">
      <div className="dropdown">
        {resolvedPath.pathname.startsWith('/divisi') && (
          <button className="back-btn" onClick={handleBack}>
            <img src="./Assets/Navbar/arrow-left.svg" alt="" />
          </button>
        )}
        <button className="dropbtn">
          {buttonText}
          <input type="checkbox" id="checkbox" />
          <label onClick={toggleDropdown} htmlFor="checkbox" className={`toggle ${isDropdownOpen ? 'active' : ''}`}>
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </button>
        <div className="dropdown-content" style={{ display: isDropdownOpen ? 'flex' : 'none' }}>
          <a
            className={`dropdown-link ${resolvedPath.pathname === '/' ? 'active' : ''}`}
            href="/"
          >
            {resolvedPath.pathname === '/' && <img src="your-image-url-here" alt="" />}
            <span>Hari Pelaksanaan</span>
          </a>
          <a
            className={`dropdown-link ${resolvedPath.pathname === '/behind-the-scene' ? 'active' : ''}`}
            href="/behind-the-scene"
          >
            {resolvedPath.pathname === '/behind-the-scene' && <img src="your-image-url-here" alt="" />}
            <span>Dibalik Kepanitiaan</span>
          </a>
          <a
            className={`dropdown-link ${resolvedPath.pathname === '/divisi' ? 'active' : ''}`}
            href="/divisi"
          >
            {resolvedPath.pathname === '/divisi' && <img src="./Assets/Navbar/default-bullet.svg" alt="" />}
            <span>Foto Divisi</span>
          </a>
          <a
            className={`dropdown-link ${resolvedPath.pathname === '/sayembara' ? 'active' : ''}`}
            href="/sayembara"
          >
            {resolvedPath.pathname === '/sayembara' && <img src="your-image-url-here" alt="" />}
            <span>Sayembara Visual</span>
          </a>
          <a
            className={`dropdown-link ${resolvedPath.pathname === '/after-movie#' ? 'active' : ''}`}
            href="/after-movie#"
          >
            {resolvedPath.pathname === '/after-movie#' && <img src="your-image-url-here" alt="" />}
            <span><i>After Movie</i></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
