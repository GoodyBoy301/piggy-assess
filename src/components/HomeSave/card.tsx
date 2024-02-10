import React from "react"
import arrowLeft from "../../assets/arrowLeft.svg"
import "./index.scss"

export default function HomeSaveCards() {
  return (
    <ul className="home__save__list">
      {cardData.map((data) => (
        <HomeSaveCard
          key={data.head}
          imgSrc={data.imgSrc}
          color={data.color}
          head={data.head}
          body={data.body}
          link={data.link}
        />
      ))}
    </ul>
  )
}

type Props = {
  imgSrc: string
  color: string
  head: string
  body: string
  link: string
}

export const HomeSaveCard: React.FC<Props> = ({ color, head, body, link }) => {
  return (
    <li className="home__save__item">
      <figure className="home__save__icon"></figure>
      <h3 className="home__save__head" style={{ color }}>
        {head}
      </h3>
      <p className="home__save__body">{body}</p>
      <a href={link} className="home__save__link">
        <span>Learn More</span>
        <object data={arrowLeft} type="image/svg+xml" />
      </a>
    </li>
  )
}

const cardData = [
  {
    imgSrc: "",
    color: "#0D60D8",
    head: "Automated Savings",
    body: "Build a dedicated savings faster on your terms automatically or manually.",
    link: "",
  },
  {
    imgSrc: "",
    color: "#F1500E",
    head: "Fixed Savings",
    body: "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.",
    link: "",
  },
  {
    imgSrc: "",
    color: "#047857",
    head: "Goal-oriented Savings",
    body: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
    link: "",
  },
  {
    imgSrc: "",
    color: "#E5288E",
    head: "Flexible Savings",
    body: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
    link: "",
  },
]
