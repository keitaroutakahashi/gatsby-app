import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "./Hero"
import Section from "./Section"

const Root = () => {
  return (
    <>
      <Hero />
      <div className="pc:mt-80 sp:mt-60">
        <Section
          title="Company"
          subTitle="私たちについて"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          isOdd
        >
          <StaticImage
            src="../../../images/home/company.jpg"
            className="w-full"
            // imgClassName="w-full"
            width={500}
            quality={95}
            alt="A Gatsby astronaut"
          />
        </Section>
        <Section
          title="Service"
          subTitle="サービスについて"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          isOdd={false}
        >
          <StaticImage
            src="../../../images/home/company.jpg"
            quality={95}
            alt="A Gatsby astronaut"
          />
        </Section>
      </div>
    </>
  )
}

export default Root
