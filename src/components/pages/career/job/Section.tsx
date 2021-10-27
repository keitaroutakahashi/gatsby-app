import * as React from "react"
import { Job } from "./data"
import Item from "./Item"
import PlusIcon from "./icon/PlusIcon"
import MinusIcon from "./icon/MinusIcon"

type Props = {
  data: Job
}

const Section: React.VFC<Props> = ({ data }) => {
  const [isFirstOpen, setIsFirstOpen] = React.useState(false)

  const handleToggleFirst = () => {
    setIsFirstOpen(prev => !prev)
  }

  return (
    <div className="first:mt-0 pc:mt-14 sp:mt-10">
      <div
        className="flex justify-between pb-2 border-b border-gray-dark cursor-pointer"
        onClick={handleToggleFirst}
      >
        <div className="">
          <p className="pc:text-sm sp:text-xs font-bold">{data.title}</p>
          <p className="mt-1 pc:text-3xl sp:text-2xl poppins">{data.titleEn}</p>
        </div>
        <div>{isFirstOpen ? <MinusIcon /> : <PlusIcon />}</div>
      </div>
      <ul className="">
        {data.contents.map(content => (
          <li className="pc:flex pc:justify-between">
            {isFirstOpen && (
              <ul className="mt-8">
                <Item title={content.title} text={content.text} />
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Section
