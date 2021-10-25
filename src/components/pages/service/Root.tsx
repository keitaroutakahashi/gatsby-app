import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../ui/Hero"
import { SubTitle } from "../../ui/Title"
import Education from "./education/Education"
import Ses from "./ses/Ses"
import Development from "./development/Development"
import Recruitment from "./recruitment/Recruitment"

const Root = () => {
  return (
    <>
      <Hero title="Service">
        <StaticImage
          src="../../../images/home/service.jpg"
          className="w-full sp:h-36"
          width={400}
          quality={95}
          alt="Service"
        />
      </Hero>
      <section className="pc:max-w-5xl pc:mx-auto pc:mt-40 sp:mt-24 sp:px-4 text-black">
        <SubTitle title="教育" />
        <div className="pc:mt-16 sp:mt-12">
          <Education />
        </div>
      </section>
      <section className="pc:max-w-5xl pc:mx-auto pc:mt-40 sp:mt-24 sp:px-4 text-black">
        <SubTitle title="SES" />
        <div className="pc:mt-16 sp:mt-12">
          <Ses />
        </div>
      </section>
      <section className="pc:max-w-5xl pc:mx-auto pc:mt-40 sp:mt-24 text-black">
        <SubTitle title="受託" />
        <div className="pc:mt-16 sp:mt-12">
          <Development />
        </div>
      </section>
      <section className="pc:max-w-5xl pc:mx-auto pc:mt-40 sp:mt-24 sp:px-4 text-black">
        <SubTitle title="採用コンサルティング" />
        <div className="pc:mt-16 sp:mt-12">
          <Recruitment />
        </div>
      </section>
    </>
  )
}

export default Root
