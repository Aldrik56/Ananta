import React, { useState, useEffect } from 'react';
import { useResolvedPath, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import linkConfigurations from './linkConfigurations'; // Use the exact case

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
    const dropdownItems = [
      { path: '/hari-pelaksanaan', text: 'Hari Pelaksanaan' },
      { path: '/behind-the-scene', text: 'Dibalik Kepanitiaan' },
      { path: '/divisi', text: 'Foto Divisi' },
      { path: '/sayembara', text: 'Sayembara Visual' },
      { path: '/after-movie#', text: 'After Movie' },
    ];

    const matchingItem = dropdownItems.find(item => path.startsWith(item.path)); // Use exact string comparison
    if (matchingItem) {
      setButtonText(matchingItem.text);
    } else {
      setButtonText('Dropdown');
    }
  }, [resolvedPath.pathname]);

  const handleBackToDivisi = () => {
    navigate('/divisi');
  };

  const handleBackToHariPelaksanaan = () => {
    navigate('/hari-pelaksanaan');
  };

  return (
    <>
      <div className='desktop'>
        {resolvedPath.pathname.startsWith('/divisi-') && (
          <button className="back-btn" onClick={handleBackToDivisi}>
            <img src="/Assets/Navbar/arrow-left.svg" alt="" />
            <p>Back</p>
          </button>
        )}
        {resolvedPath.pathname.startsWith('/hari-pelaksanaan/') && (
          <button className="back-btn" onClick={handleBackToHariPelaksanaan}>
            <img src="/Assets/Navbar/arrow-left.svg" alt="" />
            <p>Back</p>
          </button>
        )}
        <div className='nav-block'>
          <div className={`nav-link ${resolvedPath.pathname.startsWith('/hari-pelaksanaan') ? 'active' : ''}`}>
            <a href="/hari-pelaksanaan">Hari Pelaksanaan</a>
          </div>
          <div className={`nav-link ${resolvedPath.pathname === '/dibalik-kepanitiaan' ? 'active' : ''}`}>
            <a href="/dibalik-kepanitiaan">Dibalik Kepanitiaan</a>
          </div>
          {linkConfigurations.map(config => {
            if (resolvedPath.pathname === config.path) {
              return config.element;
            }
            return null;
          })}
          <div className={`nav-link ${resolvedPath.pathname === '/sayembara-visual' ? 'active' : ''}`}>
            <a href="/sayembara-visual">Sayembara Visual</a>
          </div>
          <div className={`nav-link ${resolvedPath.pathname === '/after-movie' ? 'active' : ''}`}>
            <a href="/after-movie"><i>After Movie</i></a>
          </div>
        </div>
      </div >
      <div className="navbar">
        <div className="dropdown">
          {resolvedPath.pathname.startsWith('/divisi-') && (
            <button className="back-btn" onClick={handleBackToDivisi}>
              <img src="/Assets/Navbar/arrow-left.svg" alt="" />
            </button>
          )}
          {resolvedPath.pathname.startsWith('/hari-pelaksanaan/') && (
            <button className="back-btn" onClick={handleBackToHariPelaksanaan}>
              <img src="/Assets/Navbar/arrow-left.svg" alt="" />
            </button>
          )}
          {linkConfigurations.map(config => {
            if (resolvedPath.pathname === config.path) {
              return (
                <button
                  style={config.style}
                  className="dropbtn"
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  {buttonText}
                  <input type="checkbox" id="checkbox" checked={isDropdownOpen} onChange={() => { }} />
                  <label htmlFor="checkbox" className={`toggle ${isDropdownOpen ? 'active' : ''}`}>
                    <div className="bar bar--top"></div>
                    <div className="bar bar--middle"></div>
                    <div className="bar bar--bottom"></div>
                  </label>
                </button>
              );
            }
            return null;
          })}
          <div className="dropdown-content" style={{ display: isDropdownOpen ? 'flex' : 'none' }}>
            <a
              className={`dropdown-link ${resolvedPath.pathname.startsWith('/hari-pelaksanaan') ? 'active' : ''}`}
              href="/hari-pelaksanaan"
            >
              {resolvedPath.pathname.startsWith('/hari-pelaksanaan') && <span className='default-bullet'></span>}
              <span>Hari Pelaksanaan</span>
            </a>
            <a
              className={`dropdown-link ${resolvedPath.pathname === '/behind-the-scene' ? 'active' : ''}`}
              href="/behind-the-scene"
            >
              {resolvedPath.pathname === '/behind-the-scene' && <div className='default-bullet'></div>}
              <span>Dibalik Kepanitiaan</span>
            </a>
            <a
              className={`dropdown-link ${resolvedPath.pathname.startsWith('/divisi') ? 'active' : ''}`}
              href="/divisi"
            >
              {resolvedPath.pathname.startsWith('/divisi') && (
                <>
                  {linkConfigurations.map(config => {
                    if (resolvedPath.pathname === config.path) {
                      return (
                        config.bullet
                      );
                    }
                    return null;
                  })}
                </>
              )}
              <span>Foto Divisi</span>
            </a>
            <a
              className={`dropdown-link ${resolvedPath.pathname === '/sayembara' ? 'active' : ''}`}
              href="/sayembara"
            >
              {resolvedPath.pathname === '/sayembara' && <div className='default-bullet'></div>}
              <span>Sayembara Visual</span>
            </a>
            <a
              className={`dropdown-link ${resolvedPath.pathname === '/after-movie#' ? 'active' : ''}`}
              href="/after-movie#"
            >
              {resolvedPath.pathname.startsWith('/after-movie') && <div className='default-bullet'></div>}
              <span><i>After Movie</i></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
