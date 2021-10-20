import * as React from "react"

const overviews = [
  {
    title: "社名",
    text: "株式会社XXX",
  },
  {
    title: "設立",
    text: "xxx年xx月xx日",
  },
  {
    title: "代表",
    text: "田中 太郎",
  },
  {
    title: "住所",
    text: "〒160-0023",
    subText: "東京都渋谷区",
  },
]

const OverView = () => {
  return (
    <ul className="pc:max-w-4xl pc:mx-auto sp:px-5">
      {overviews.map(item => (
        <li
          key={item.title}
          className="flex items-center first:mt-0 mt-8 pc:px-8 pb-2 border-b border-gray-light pc:text-lg"
        >
          <p className="pc:w-44 sp:w-32 font-bold">{item.title}</p>
          <div className="">
            <p className="">{item.text}</p>
            {item.subText && <p className="">{item.subText}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default OverView
