import React from "react"
import "./index.scss"

export const FooterProducts: React.FC = () => {
  return (
    <ul className="footer__list">
      <h4>Products</h4>
      {cardData
        .filter((data) => data.type === "products")
        .map((data) => (
          <FooterLink key={data.name} href={data.href}>
            {data.name}
          </FooterLink>
        ))}
    </ul>
  )
}

export const FooterCompany: React.FC = () => {
  return (
    <ul className="footer__list">
      <h4>Company</h4>
      {cardData
        .filter((data) => data.type === "company")
        .map((data) => (
          <FooterLink key={data.name} href={data.href}>
            {data.name}
          </FooterLink>
        ))}
    </ul>
  )
}

export const FooterLegal: React.FC = () => {
  return (
    <ul className="footer__list">
      <h4>Legal</h4>
      {cardData
        .filter((data) => data.type === "legal")
        .map((data) => (
          <FooterLink key={data.name} href={data.href}>
            {data.name}
          </FooterLink>
        ))}
    </ul>
  )
}

export const FooterContact: React.FC = () => {
  return (
    <ul className="footer__list">
      <h4>Contact</h4>
      {cardData
        .filter((data) => data.type === "contact")
        .map((data) => (
          <FooterLink key={data.name} href={data.href}>
            {data.name}
          </FooterLink>
        ))}
    </ul>
  )
}

type Props = {
  children: string
  href: string
}

export const FooterLink: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href}>
      <li className="footer__item">{children}</li>
    </a>
  )
}

const cardData = [
  {
    name: "Piggybank",
    href: "",
    type: "products",
  },
  {
    name: "Invest",
    href: "",
    type: "products",
  },
  {
    name: "Safelock",
    href: "",
    type: "products",
  },
  {
    name: "Target Savings",
    href: "",
    type: "products",
  },
  {
    name: "Flex Naira",
    href: "",
    type: "products",
  },
  {
    name: "About",
    href: "",
    type: "company",
  },
  {
    name: "FAQs",
    href: "",
    type: "company",
  },
  {
    name: "Blog",
    href: "",
    type: "company",
  },
  {
    name: "Terms",
    href: "",
    type: "legal",
  },
  {
    name: "Privacy",
    href: "",
    type: "legal",
  },
  {
    name: "Security",
    href: "",
    type: "legal",
  },
  {
    name: "Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.",
    href: "",
    type: "contact",
  },
  {
    name: "contact@piggyvest.com",
    href: "",
    type: "contact",
  },
  {
    name: "+234 700 933 933 933",
    href: "",
    type: "contact",
  },
]
