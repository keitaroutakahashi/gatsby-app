import * as React from "react"
import { useSpring, animated } from "react-spring"

const Hero = () => {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  })

  return (
    <div className="relative pt-32 text-center">
      <div className="border-4 border-brand-primary transform -rotate-45"></div>
      <div className="border-4 border-brand-secondary transform -rotate-45"></div>
      <p className="relative shadow-text text-4xl">
        Lorem ipsum dolor
        <br />
        dolor sit amet, consectetur adipiscing
      </p>
      {/* <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        /> */}
      {/* <animated.div style={props}>フェイドインします</animated.div> */}
    </div>
  )
}

export default Hero
