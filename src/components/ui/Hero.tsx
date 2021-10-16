import * as React from "react"

const Hero: React.FC = ({ children }) => {
  return <div className="rounded overflow-hidden">{children}</div>
}

export default Hero
