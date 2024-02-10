import React from "react"
import avatar from "../../assets/avatar-001.png"
import "./index.scss"

export default function HomeTestimonies() {
  return (
    <ul className="home__you__testimonies">
      {faqData.map((data) => (
        <HomeTestimony
          key={data.name}
          imgSrc={data.imgSrc}
          name={data.name}
          testimony={data.testimony}
        />
      ))}
    </ul>
  )
}

type Props = {
  imgSrc: string
  name: string
  testimony: string
}

export const HomeTestimony: React.FC<Props> = ({ imgSrc, name, testimony }) => {
  return (
    <li className="home__you__testimony">
      <h3>
        <img src={imgSrc} alt="" />
        <i>{name}</i>
      </h3>
      <p>{testimony}</p>
    </li>
  )
}

const faqData = [
  {
    imgSrc: avatar,
    name: "Kelvin Okeh",
    testimony:
      "Best money transfer app so far. Great concept, perfect interface and a very awesome support team. Please endeavour to keep this good work up. Cheers!!!",
  },
  {
    imgSrc: avatar,
    name: "Kelvin Okeh",
    testimony:
      "Best money transfer app so far. Great concept, perfect interface and a very awesome support team. Please endeavour to keep this good work up. Cheers!!!",
  },
  {
    imgSrc: avatar,
    name: "Kelvin Okeh",
    testimony:
      "Best money transfer app so far. Great concept, perfect interface and a very awesome support team. Please endeavour to keep this good work up. Cheers!!!",
  },
  {
    imgSrc: avatar,
    name: "Kelvin Okeh",
    testimony:
      "Best money transfer app so far. Great concept, perfect interface and a very awesome support team. Please endeavour to keep this good work up. Cheers!!!",
  },
  {
    imgSrc: avatar,
    name: "Kelvin Okeh",
    testimony:
      "Best money transfer app so far. Great concept, perfect interface and a very awesome support team. Please endeavour to keep this good work up. Cheers!!!",
  },
]
