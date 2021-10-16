import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../ui/Hero"

const Root = () => {
  return (
    <>
      <Hero>
        <StaticImage
          src="../../../images/home/company.jpg"
          className="w-full sp:h-24"
          // imgClassName="w-full"
          width={400}
          quality={95}
          alt="A Gatsby astronaut"
        />
        <h1 className="pc:mt-8 pc:text-3xl font-bold text-center">Company</h1>
      </Hero>
    </>
  )
}

export default Root
