import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

type Props = {
  children: React.ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto pt-20">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
