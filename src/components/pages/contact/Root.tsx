import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../ui/Hero"
import { SubTitle } from "../../ui/Title"
import Contact from "./Contact"

const Root = () => {
  return (
    <>
      <Hero title="Contact">
        <StaticImage
          src="../../../images/home/company.jpg"
          className="w-full sp:h-36"
          // imgClassName="w-full"
          width={400}
          quality={95}
          alt="Contact"
        />
        <section className="pc:mt-32 sp:mt-20 text-black">
          <SubTitle title="お問い合わせ" />
          <div className="pc:mt-16 sp:mt-12">
            <Contact />
          </div>
        </section>
      </Hero>
    </>
  )
}

export default Root
