import logo from "../../assets/logo.svg"
import "./index.scss"

function Nav() {
  return (
    <div className="nav">
      <nav className="nav__wrapper">
        <a href="" className="nav__logo">
          <svg width="208" height="40" viewBox="0 0 208 40">
            <use href={`${logo}#logosvg`}></use>
          </svg>
        </a>
        <ul className="nav__links">
          <a href="" className="nav__link active">
            <li>Save</li>
          </a>
          <a href="" className="nav__link">
            <li>Invest</li>
          </a>
          <a href="" className="nav__link">
            <li>Stories</li>
          </a>
          <a href="" className="nav__link">
            <li>FAQs</li>
          </a>
          <a href="" className="nav__link">
            <li>Blog</li>
          </a>
          <a href="" className="nav__link">
            <li>Ebook</li>
          </a>
        </ul>
        <div className="nav__ctas">
          <a href="" className="nav__cta__secondary">
            Log in
          </a>
          <a href="" className="nav__cta__primary">
            Create a free account
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav
