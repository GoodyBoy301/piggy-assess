import logo from "../../assets/logo.svg"
import fb from "../../assets/fb.svg"
import x from "../../assets/x.svg"
import ig from "../../assets/ig.svg"
import qr from "../../assets/qr.png"
import footerBg from "../../assets/footer-bg.png"
import "./index.scss"
import {
  FooterCompany,
  FooterContact,
  FooterLegal,
  FooterProducts,
} from "./links"

function Footer() {
  return (
    <div className="footer">
      <footer className="footer__wrapper">
        <img src={footerBg} alt="" />
        <div className="footer__links">
          <div className="footer__name">
            <a href="" className="nav__logo">
              <svg width="208" height="40" viewBox="0 0 208 40">
                <use href={`${logo}#logosvg`}></use>
              </svg>
            </a>
            <img src={qr} alt="" />
          </div>
          <ul className="footer__grid">
            <FooterProducts />
            <FooterCompany />
            <FooterLegal />
            <FooterContact />
            <div className="footer__socials">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <use href={`${fb}#fb`} />
                </svg>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <use href={`${x}#x`} />
                </svg>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <use href={`${ig}#ig`} />
                </svg>
              </a>
            </div>
          </ul>
        </div>
        <p className="footer__about">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p className="footer__copyright">
          2016 - 2023 PiggyTech Global Limited - RC 1405222
        </p>
      </footer>
    </div>
  )
}

export default Footer
