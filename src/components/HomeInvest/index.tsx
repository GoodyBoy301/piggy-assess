import ui002 from "../../assets/ui-002.png"
import ui003 from "../../assets/ui-003.png"
import ui004 from "../../assets/ui-004.png"
import "./index.scss"

function HomeInvest() {
  return (
    <div className="home__invest">
      <div className="home__invest__wrapper">
        <p className="home__invest__intro">UP TO 25% RETURNS</p>
        <h2 className="home__invest__title">Access investment opportunities</h2>
        <p className="home__invest__subtitle">
          Invest securely and confidently on the go. Grow your money confidently
          by investing in pre-vetted investment opportunities.
        </p>
        <a href="" className="home__invest__link">
          Learn More About Investments
        </a>
        <div className="home__invest__doodles">
          <div className="home__invest__doodle">
            <span>🏠</span>
            <span>Real Estate</span>
          </div>
          <div className="home__invest__doodle">
            <span>💰</span>
            <span>Fixed Income</span>
          </div>
          <svg
            width="588"
            height="218"
            viewBox="0 0 588 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M586.76 216.67C576.353 183.483 561.433 153.557 542 126.89C520 96.69 492.203 70.7533 458.61 49.08C437.602 35.3922 414.923 24.4594 391.13 16.55C367.275 8.68682 342.555 3.74739 317.51 1.83996C296.366 0.310128 275.122 0.879577 254.09 3.53996C231.924 6.47502 210.134 11.7649 189.09 19.32C144.657 35.5063 104.563 61.7388 71.937 95.9712C39.3108 130.204 15.0339 171.511 1 216.67M60.35 216.67C96.67 123.32 187.56 57 293.9 57C400.24 57 491.12 123.3 527.47 216.67"
              stroke="url(#paint0_linear_1_732)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_732"
                x1="294.356"
                y1="1.00342"
                x2="294"
                y2="185.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CEDCEB" />
                <stop offset="1" stopColor="#CEDCEB" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="home__invest__doodle">
            <span>🌴</span>
            <span>Agriculture</span>
          </div>
          <div className="home__invest__doodle">
            <span>🚕</span>
            <span>Transportation</span>
          </div>
        </div>
        <figure className="home__invest__media">
          <img src={ui002} alt="" />
          <img src={ui003} alt="" />
          <img src={ui004} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default HomeInvest
