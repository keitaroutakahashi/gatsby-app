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
      <main className="pc:pt-20 sp:pt-16 main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
