import * as React from "react"

type Props = {
  title: string
  subTitle: string
  image: string
  description: string
  isOdd: boolean
}

const Section = ({ title, subTitle, image, description, isOdd }: Props) => {
  return (
    <section className="pc:mt-52 sp:mt-40 first:mt-0">
      <h2 className="shadow-text text-3xl text-center font-bold">{title}</h2>
      <p className="mt-2 text-sm text-center font-bold">{subTitle}</p>
      <div
        className={`pc:flex pc:fjustify-between  pc:mt-10 ${
          isOdd ? "" : "pc:flex-row-reverse"
        }`}
      >
        <div className="pc:w-80">画像が入る</div>
        <div className="pc:flex-1 sp:mt-10">
          <p className="">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default Section
