import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"
import Root from "../components/pages/company/Root"

const CompanyPage = () => {
  return (
    <Layout>
      <>
        <Seo title="Company" description="" />
        <Root />
      </>
    </Layout>
  )
}

export default CompanyPage
