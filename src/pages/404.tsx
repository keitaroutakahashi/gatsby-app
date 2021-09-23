import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <>
        <Seo title="404: Not found" description="" />
        <h1>ページが見つかりません</h1>
      </>
    </Layout>
  )
}

export default NotFoundPage
