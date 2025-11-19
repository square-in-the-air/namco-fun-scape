export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">MySite</div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="/" className="header__link">
              Home
            </a>
          </li>
          <li className="header__item">
            <a href="/about" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <a href="/contact" className="header__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
