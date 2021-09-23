import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSpring, animated } from "react-spring"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  })

  return (
    <Layout>
      <>
        <Seo title="Home" description="" />
        <div className="relative pt-32 text-center">
          <div className="border-4 border-brand-primary transform -rotate-45"></div>
          <div className="border-4 border-brand-secondary transform -rotate-45"></div>
          <p className="relative shadow-text text-4xl">
            Lorem ipsum dolor
            <br />
            dolor sit amet, consectetur adipiscing
          </p>
        </div>

        <animated.div style={props}>フェイドインします</animated.div>

        {/* <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        /> */}

        <div className="mt-40">
          <section>
            <h2 className="shadow-text text-3xl text-center font-bold">
              Company
            </h2>
            <p className="mt-2 text-sm text-center font-bold">私たちについて</p>
            <div className="pc:flex pc:fjustify-between mt-10">
              <div className="pc:w-80">画像が入る</div>
              <div className="pc:flex-1 sp:mt-10">
                <p className="">説明文</p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="shadow-text text-3xl text-center font-bold">
              Service
            </h2>
            <p className="mt-2 text-sm text-center font-bold">
              サービスについて
            </p>
            <div className="pc:flex pc:fjustify-between mt-10">
              <div className="pc:w-80">画像が入る</div>
              <div className="pc:flex-1 sp:mt-10">
                <p className="">説明文</p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    </Layout>
  )
}

export default IndexPage
