import * as React from "react"

const Card: React.FC = ({ children }) => {
  return <div className="rounded overflow-hidden">{children}</div>
}

export default Card
