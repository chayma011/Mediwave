import { Link } from 'react-router-dom';

export default function NavHome5({ setMobileToggle }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileToggle(false);
  };

  return (
    <ul className="cs_nav_list fw-medium" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('1')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          Home
        </button>
      </li>

      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('2')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          About
        </button>
      </li>

      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('3')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          Services
        </button>
      </li>

      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('4')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          Work
        </button>
      </li>

      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('5')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          Skills
        </button>
      </li>

      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('6')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          Team
        </button>
      </li>

      <li className="menu-item">
        <button 
          onClick={() => scrollToSection('7')} 
          className="nav-link-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            cursor: 'pointer', 
            fontFamily: 'inherit', 
            fontSize: 'inherit',
            fontWeight: 'bold',
            padding: '25px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          Partner
        </button>
      </li>
    </ul>
  );
}
