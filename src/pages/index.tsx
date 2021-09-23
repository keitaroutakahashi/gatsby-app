import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"
import Hero from "../components/pages/home/Hero"
import Section from "../components/pages/home/Section"

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Seo title="Home" description="" />
        <Hero />
        <div className="pc:mt-80 sp:mt-60">
          <Section
            title="Company"
            subTitle="私たちについて"
            image=""
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            isOdd
          />
          <Section
            title="Service"
            subTitle="サービスについて"
            image=""
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            isOdd={false}
          />
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
