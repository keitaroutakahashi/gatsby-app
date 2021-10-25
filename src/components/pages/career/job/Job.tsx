import * as React from "react"
import data from "./data"
import Section from "./Section"

const Job = () => {
  return (
    <>
      {data.map(target => (
        <Section key={target.title} data={target} />
      ))}
    </>
  )
}

export default Job
