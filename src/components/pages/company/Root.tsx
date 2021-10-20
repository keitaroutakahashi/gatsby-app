import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../ui/Hero"
import { SubTitle } from "../../ui/Title"
import OverView from "./OverView"
import Access from "./Access"

const Root = () => {
  return (
    <>
      <Hero title="Company">
        <StaticImage
          src="../../../images/home/company.jpg"
          className="w-full sp:h-36"
          // imgClassName="w-full"
          width={400}
          quality={95}
          alt="Company"
        />
      </Hero>
      <section className="pc:mt-32 sp:mt-20 text-black">
        <SubTitle title="会社概要" />
        <div className="pc:mt-16 sp:mt-12">
          <OverView />
        </div>
      </section>
      <section className="pc:mt-32 sp:mt-20 text-black">
        <SubTitle title="アクセス" />
        <div className="pc:mt-16 sp:mt-12">
          <Access />
        </div>
      </section>
    </>
  )
}

export default Root
