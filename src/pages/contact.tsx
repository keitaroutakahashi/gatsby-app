import * as React from "react"
import Layout from "../components/ui/Layout"
import Seo from "../components/ui/Seo"
import Root from "../components/pages/contact/Root"

const ContactPage = () => {
  return (
    <Layout>
      <>
        <Seo title="contact" description="" />
        <Root />
      </>
    </Layout>
  )
}

export default ContactPage
