import ui001 from "../../assets/ui-001.png"
import "./index.scss"
import HeroSaveCards from "./card"

function HeroSave() {
  return (
    <div className="home__save">
      <div className="home__save__wrapper">
        <figure className="home__save__media">
          <img src={ui001} alt="" />
        </figure>
        <div>
          <h2 className="home__save__title">4 ways to build your savings</h2>
          <p className="home__save__subtitle">
            Earn 5%-15% when you save with any of these PiggyVest plans.
          </p>
          <HeroSaveCards />
        </div>
      </div>
    </div>
  )
}

export default HeroSave
