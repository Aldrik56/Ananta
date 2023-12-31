import React, { useState, useEffect } from 'react';
import { useResolvedPath, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import linkConfigurations from './linkConfigurations';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Dropdown');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [wider, setWider] = useState(false);

  const checkWidth = () => {
    if (
      resolvedPath.pathname === "/hari-pelaksanaan" ||
      resolvedPath.pathname === "/divisi" ||
      resolvedPath.pathname === "/after-movie"
    ) {
      if (window.innerWidth > 1200) {
        setWider(true);
      } else {
        setWider(false);
      }
    }
  };

  useEffect(() => {
    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  const resolvedPath = useResolvedPath();

  useEffect(() => {
    const path = resolvedPath.pathname;
    const dropdownItems = [
      { path: '/hari-pelaksanaan', text: 'Hari Pelaksanaan' },
      { path: '/dibalik-kepanitiaan', text: 'Dibalik Kepanitiaan' },
      { path: '/divisi', text: 'Foto Divisi' },
      { path: '/sayembara-visual', text: 'Sayembara Visual' },
      { path: '/after-movie', text: <em style={{ fontStyle: 'italic' }}>After Movie</em> },
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
      <div className={`desktop ${wider ? 'wider' : ''}`}>
        {resolvedPath.pathname.startsWith('/divisi-') && (
          <button className="back-btn" onClick={handleBackToDivisi}>
            <img src="/Assets/Navbar/arrow-left.svg" alt="" />
            <p>Kembali</p>
          </button>
        )}
        {resolvedPath.pathname.startsWith('/hari-pelaksanaan/') && (
          <button className="back-btn" onClick={handleBackToHariPelaksanaan}>
            <img src="/Assets/Navbar/arrow-left.svg" alt="" />
            <p>Kembali</p>
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
                  <label className={`toggle ${isDropdownOpen ? 'active' : ''}`}>
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
              className={`dropdown-link ${resolvedPath.pathname === '/dibalik-kepanitiaan' ? 'active' : ''}`}
              href="/dibalik-kepanitiaan"
            >
              {resolvedPath.pathname === '/dibalik-kepanitiaan' && <div className='default-bullet'></div>}
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
              className={`dropdown-link ${resolvedPath.pathname === '/sayembara-visual' ? 'active' : ''}`}
              href="/sayembara-visual"
            >
              {resolvedPath.pathname === '/sayembara-visual' && <div className='default-bullet'></div>}
              <span>Sayembara Visual</span>
            </a>
            <a
              className={`dropdown-link ${resolvedPath.pathname === '/after-movie' ? 'active' : ''}`}
              href="/after-movie"
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
