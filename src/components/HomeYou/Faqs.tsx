import React from "react"
import plusminus from "../../assets/plusminus.svg"
import "./index.scss"

export default function HomeFaqList() {
  return (
    <ul className="home__you__body">
      {faqData.map((data) => (
        <HomeFaqItem
          key={data.question}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </ul>
  )
}

type Props = {
  question: string
  answer: string
}

export const HomeFaqItem: React.FC<Props> = ({ question, answer }) => {
  return (
    <li className="home__you__faq">
      <h3>
        <svg width="14" height="14" viewBox="0 0 14 14">
          <use href={`${plusminus}#plus`}></use>
        </svg>
        <i>{question}</i>
      </h3>
      <p>{answer}</p>
    </li>
  )
}

const faqData = [
  {
    question: "What is Piggyvest?",
    answer:
      "Blah blah mobile app that lets you send money from anywhere in the world to and within Africa using fiat. It also lets you to buy discounted airtime and create custom virtual cards to spend money online.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Blah blah mobile app that lets you send money from anywhere in the world to and within Africa using fiat. It also lets you to buy discounted airtime and create custom virtual cards to spend money online.",
  },
  {
    question: "How much can I save on Piggyvest?",
    answer:
      "Blah blah mobile app that lets you send money from anywhere in the world to and within Africa using fiat. It also lets you to buy discounted airtime and create custom virtual cards to spend money online.",
  },
]
