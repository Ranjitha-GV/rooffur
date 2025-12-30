import './HomePage.css';
import rooffurLogo from '../assets/rooffur3.svg';

function HomePage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src={rooffurLogo} alt="ROOFFUR Logo" className="rooffur-logo" />
            <span className="brand-name">ROOFFUR</span>
          </div>
          <nav className="navigation">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#more" className="nav-link">MORE</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Decorative wavy lines */}
        <div className="wavy-lines">
          <svg className="wavy-line-left" viewBox="0 0 200 800" preserveAspectRatio="none">
            <path d="M0,0 Q50,100 0,200 T0,400 T0,600 T0,800" stroke="#d4a574" strokeWidth="3" fill="none"/>
          </svg>
          <svg className="wavy-line-bottom" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0,100 Q200,50 400,100 T800,100 T1200,100" stroke="#d4a574" strokeWidth="3" fill="none"/>
          </svg>
          <svg className="wavy-line-top-right" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0,0 Q100,50 200,0 T400,0" stroke="#d4a574" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        <div className="content-wrapper">
          {/* Left Side - Text Content */}
          <div className="left-content">
            <h1 className="main-title">
              <span className="title-line">PET</span>
              <span className="title-line">SHOP</span>
            </h1>
            <p className="tagline">Your One-Stop Shop for Pet Happiness!</p>
            <p className="website-url">www.reallygreatsite.com</p>
          </div>

          {/* Right Side - Polaroid Photos */}
          <div className="right-content">
            <div className="polaroid-container">
              {/* Background Photo - Corgi */}
              <div className="polaroid polaroid-back">
                <div className="polaroid-frame">
                  <div className="polaroid-image corgi-image">
                    <div className="pet-placeholder">
                      <span className="pet-emoji">🐕</span>
                      <p className="pet-label">Corgi Puppy</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Foreground Photo - Cat */}
              <div className="polaroid polaroid-front">
                <div className="polaroid-frame">
                  <div className="polaroid-image cat-image">
                    <div className="pet-placeholder">
                      <span className="pet-emoji">🐱</span>
                      <p className="pet-label">Orange Tabby</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

