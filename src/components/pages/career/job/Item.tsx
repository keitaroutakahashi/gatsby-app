import * as React from "react"

type Props = {
  title: string
  text: string
}

const Item: React.VFC<Props> = ({ title, text }) => {
  return (
    <li className="pc:flex first:mt-0 mt-8">
      <p className="pc:w-48 pc:text-lg text-gray-dark font-bold">{title}</p>
      <p
        className="flex-1 sp:mt-2 sp:text-sm"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </li>
  )
}

export default Item
