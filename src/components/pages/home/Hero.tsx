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
      <div className="flex justify-center items-center flex-col pc:w-4/5 transform -rotate-45">
        <div className="w-full border-4 border-brand-primary "></div>
        <div className="w-full border-4 border-brand-secondary "></div>
      </div>
      <p className="relative shadow-text text-4xl poppins">
        Lorem ipsum dolor
        <br />
        dolor sit amet, consectetur adipiscing
      </p>
      {/* <animated.div style={props}>フェイドインします</animated.div> */}
    </div>
  )
}

export default Hero
