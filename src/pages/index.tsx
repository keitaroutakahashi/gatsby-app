import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"
import Root from "../components/pages/home/Root"

const HomePage = () => {
  return (
    <Layout>
      <>
        <Seo title="test company" description="test" />
        <Root />
      </>
    </Layout>
  )
}

export default HomePage
