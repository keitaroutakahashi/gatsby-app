import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"
import Root from "../components/pages/service/Root"

const ServicePage = () => {
  return (
    <Layout>
      <>
        <Seo title="Service | test company" description="" />
        <Root />
      </>
    </Layout>
  )
}

export default ServicePage
