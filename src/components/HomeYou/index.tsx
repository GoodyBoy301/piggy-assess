import playstore from "../../assets/playstore.svg"
import appstore from "../../assets/appstore.svg"
import adBg from "../../assets/ad-bg.png"
import saver from "../../assets/saver.mp4"
import avatar1 from "../../assets/avatar-002.png"
import avatar2 from "../../assets/avatar-003.png"
import avatar3 from "../../assets/avatar-004.png"
import avatar4 from "../../assets/avatar-005.png"
import avatar5 from "../../assets/avatar-006.png"
import bg001 from "../../assets/bg-001.png"
import bg002 from "../../assets/bg-002.png"
import bg003 from "../../assets/bg-003.png"
import bg004 from "../../assets/bg-004.png"
import featured001 from "../../assets/tech-point.png"
import featured002 from "../../assets/the-guardian.png"
import featured003 from "../../assets/tech-crunch.png"
import HomeFaqList from "./Faqs"
import "./index.scss"
import HomeTestimonies from "./Testimonials"

function HomeYou() {
  return (
    <div className="home__you">
      <div className="home__you__wrapper">
        <div className="home__you__customer">
          <div className="home__you__read">
            <h2>Meet the Saver of the Month!</h2>
            <p>
              Every month, we shine a spotlight on one saver, asking them
              questions about their savings culture and how the product is
              specifically helping them shape how they spend and save for future
              responsibilities.
            </p>
          </div>
          <figure className="home__you__watch">
            <video src={saver}></video>
            <div className="home__you__play">
              <svg
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9499 0.833282C7.74987 0.833282 0.283203 8.29995 0.283203 17.5C0.283203 26.7 7.74987 34.1666 16.9499 34.1666C26.1499 34.1666 33.6165 26.7 33.6165 17.5C33.6165 8.29995 26.1665 0.833282 16.9499 0.833282ZM21.9499 21.2166L17.1165 24C16.5165 24.3499 15.8499 24.5166 15.1999 24.5166C14.5332 24.5166 13.8832 24.3499 13.2832 24C12.0832 23.2999 11.3665 22.0666 11.3665 20.6666V15.0833C11.3665 13.7 12.0832 12.45 13.2832 11.75C14.4832 11.0499 15.9165 11.0499 17.1332 11.75L21.9665 14.5333C23.1665 15.2333 23.8832 16.4666 23.8832 17.8666C23.8832 19.2666 23.1665 20.5166 21.9499 21.2166Z"
                  fill="white"
                />
              </svg>
              <span>Watch Felicia's Story</span>
            </div>
          </figure>
        </div>
        <div className="home__you__faqs">
          <div className="home__you__head">
            <h2>Some of the things you may want to know</h2>
            <p>We've answered them so you don't have to ask.</p>
          </div>
          <HomeFaqList />
        </div>
        <div className="home__you__testimonials">
          <HomeTestimonies />
        </div>
        <div className="home__you__ad">
          <img src={adBg} alt="" />
          <div className="home__you__bg">
            <div className="home__you__adleft">
              <img src={bg001} alt="" />
              <img src={bg002} alt="" />
              <img src={bg003} alt="" />
              <img src={bg004} alt="" />
            </div>
            <div className="home__you__adright">
              <img src={bg001} alt="" />
              <img src={bg002} alt="" />
              <img src={bg003} alt="" />
              <img src={bg004} alt="" />
            </div>
          </div>
          <figure className="home__you__avatars">
            <span>
              <img src={avatar1} alt="" />
            </span>
            <span>
              <img src={avatar2} alt="" />
            </span>
            <span>
              <img src={avatar3} alt="" />
            </span>
            <span>
              <img src={avatar4} alt="" />
            </span>
            <span>
              <img src={avatar5} alt="" />
            </span>
          </figure>
          <h2>4 Million+ Customers</h2>
          <p>
            Since launching in 2016, over 4,000,000 people have used PiggyVest
            to manage their money better, avoid over-spending and be more
            accountable.
          </p>
          <div className="home__you__ctas">
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
        </div>
        <div className="home__you__featured">
          <p>As featured on</p>
          <img src={featured001} alt="" />
          <img src={featured002} alt="" />
          <img src={featured003} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeYou
