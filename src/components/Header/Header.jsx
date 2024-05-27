import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import blessLogo from "../../assets/Blesslogo.png";
import "./header.css";

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const scrollPosition = window.scrollY - header.offsetHeight;

      if (scrollPosition <= 0) {
        header.style.boxShadow = 'none';
      } else {
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
      }

      const sections = document.querySelectorAll('section');
      sections.forEach((section, i) => {
        const sectionTop = section.offsetTop - 96-150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSectionIndex(i);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('#cta', {
      origin: 'left',
      duration: 2000,
      distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
      origin: 'left',
      duration: 2000,
      distance: '20%',
    });

    ScrollReveal().reveal('.us_image', {
      origin: 'left',
      duration: 2000,
      distance: '20%',
    });

    ScrollReveal().reveal('.blessCake', {
      origin: 'right',
      duration: 1000,
      distance: '20%',
    });

    ScrollReveal().reveal('.blessLogo', {
      origin: 'top',
      duration: 1000,
      distance: '10%',
    });

  }, []);

  return (
    <header>
      <nav id="navbar">
        <img className="blessLogo" src={blessLogo} alt="Bless Logo" />
        <ul id="nav_list">
          {['home', 'about', 'menu'].map((item, index) => (
            <li key={item} className={`nav-item ${index === activeSectionIndex ? 'active' : ''}`}>
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </li>
          ))}
        </ul>
        <button className="btn-default">
          Peça aqui!
        </button>

        <button id="mobile_btn" onClick={toggleMobileMenu}>
          <i className={mobileMenuActive ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
        </button>
      </nav>

      <div id="mobile_menu" className={mobileMenuActive ? "active" : ""}>
        <ul id="mobile_nav_list">
          {['home', 'about', 'menu'].map((item, index) => (
            <li key={item} className={`nav-item ${index === activeSectionIndex ? 'active' : ''}`}>
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </li>
          ))}
        </ul>
        <button className="btn-default">
          Peça aqui!
        </button>
      </div>
    </header>
  );
};

export default Header;
