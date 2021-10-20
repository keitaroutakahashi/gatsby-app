import * as React from "react"

type SubTitleProps = {
  title: string
}

export const SubTitle: React.FC<SubTitleProps> = ({ title }) => {
  return (
    <h2 className="text-center pc:text-4xl sp:text-2xl font-bold">{title}</h2>
  )
}
