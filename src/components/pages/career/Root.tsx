import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../ui/Hero"
import { SubTitle } from "../../ui/Title"
import Job from "./job/Job"

const Root = () => {
  return (
    <>
      <Hero title="Career">
        <StaticImage
          src="../../../images/home/career.jpg"
          className="w-full sp:h-36"
          width={400}
          quality={95}
          alt="Career"
        />
      </Hero>
      <section className="pc:max-w-6xl pc:mx-auto pc:mt-40 sp:mt-24 pc:px-5 sp:px-4 text-black">
        <SubTitle title="募集要項" />
        <div className="pc:mt-16 sp:mt-12">
          <Job />
        </div>
      </section>
    </>
  )
}

export default Root
