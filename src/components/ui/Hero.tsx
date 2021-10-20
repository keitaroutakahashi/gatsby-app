import * as React from "react"

type Props = {
  title: string
}

const Hero: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="relative">
      <div className="filter brightness-50">{children}</div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pc:text-8xl sp:text-4xl shadow-text font-bold text-center poppins">
        {title}
      </h1>
    </div>
  )
}

export default Hero
