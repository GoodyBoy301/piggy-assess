import playstore from "../../assets/playstore.svg"
import appstore from "../../assets/appstore.svg"
import security from "../../assets/security.svg"
import bg001 from "../../assets/bg-001.png"
import bg002 from "../../assets/bg-002.png"
import bg003 from "../../assets/bg-003.png"
import bg004 from "../../assets/bg-004.png"
import bg005 from "../../assets/bg-005.png"
import girlInPad from "../../assets/girl-in-ipad.png"
import "./index.scss"

function Header() {
  return (
    <div className="header">
      <aside className="header__bg">
        <svg
          width="1515"
          height="985"
          viewBox="0 0 1515 985"
          fill="green"
          xmlns="http://www.w3.org/2000/svg"
          id="svgClip"
        >
          <path
            opacity="0.2"
            d="M1514 1H0.5V858.5C591.552 1027.05 922.949 1025.35 1514 858.5V1Z"
            stroke="black"
          />
        </svg>

        <div className="header__bg__left">
          <img src={bg001} alt="" />
          <img src={bg002} alt="" />
          <img src={bg003} alt="" />
          <img src={bg004} alt="" />
        </div>
        <div className="header__bg__right">
          <img src={bg001} alt="" />
          <img src={bg002} alt="" />
          <img src={bg003} alt="" />
          <img src={bg004} alt="" />
        </div>
        <img src={bg005} alt="" />
        <figure className="header__media">
          <img src={girlInPad} alt="girl in ipad" />
        </figure>
      </aside>
      <header className="header__wrapper">
        <h1 className="header__title">
          The Better Way to <i>Save and Invest</i>
        </h1>
        <p className="header__subtitle">
          Piggyvest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <div className="header__download">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="header__download__link"
          >
            <svg width="17" height="20" viewBox="0 0 17 20">
              <use href={`${playstore}#playstoresvg`}></use>
            </svg>
            <span>Get on Google Play</span>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="header__download__link"
          >
            <svg width="18" height="22" viewBox="0 0 18 22">
              <use href={`${appstore}#appstoresvg`}></use>
            </svg>
            <span>Get on App Store</span>
          </a>
        </div>
        <div className="header__end">
          <div className="header__end__left">
            <svg width="96" height="100" viewBox="0 0 96 100">
              <use href={`${security}#securitysvg`}></use>
            </svg>
            <h2>Your security is our priority</h2>
          </div>
          <div className="header__end__right">
            <p>
              PiggyVest uses the highest level of Internet Security and it is
              secured by 256 bits SSL security encryption to ensure that your
              information is comepletely protected from fraud.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <aside className="header__decoration">
          <svg width="1514" height="61" viewBox="0 0 1514 61" fill="none">
            <path
              d="M1513 59.5V1L1356.5 13.5L1193.5 23L988.5 30.5L783 33L587.5 31.5L489.5 29.5L392.5 26L195.5 16L1 2V60L1513 59.5Z"
              fill="#ffffff"
              stroke="black"
            />
          </svg>
        </aside>
      </header>
    </div>
  )
}

export default Header
