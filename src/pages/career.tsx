import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"
import Root from "../components/pages/career/Root"

const CareerPage = () => {
  return (
    <Layout>
      <>
        <Seo title="Career" description="" />
        <Root />
      </>
    </Layout>
  )
}

export default CareerPage
