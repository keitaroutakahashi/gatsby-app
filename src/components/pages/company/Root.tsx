import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../ui/Hero"
import OverView from "./OverView"
import Access from "./Access"

const Root = () => {
  return (
    <>
      <Hero title="Company">
        <StaticImage
          src="../../../images/home/company.jpg"
          className="w-full sp:h-28"
          // imgClassName="w-full"
          width={400}
          quality={95}
          alt="A Gatsby astronaut"
        />
      </Hero>
      <section className="pc:mt-32 sp:mt-20 text-black">
        <h2 className="text-center pc:text-4xl sp:text-2xl font-bold">
          会社概要
        </h2>
        <div className="pc:mt-16 sp:mt-12">
          <OverView />
        </div>
      </section>
      <section className="pc:mt-32 sp:mt-20 text-black">
        <h2 className="text-center pc:text-4xl sp:text-2xl font-bold">
          アクセス
        </h2>
        <div className="pc:mt-16 sp:mt-12">
          <Access />
        </div>
      </section>
    </>
  )
}

export default Root
