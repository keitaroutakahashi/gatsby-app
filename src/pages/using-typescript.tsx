import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  })
  return (
    <Layout>
      <Seo title="Using TypeScript" description="test" />
      <h1>Gatsby supports TypeScript by default!</h1>
      <animated.div style={props}>フェイドインします</animated.div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingTypescript
