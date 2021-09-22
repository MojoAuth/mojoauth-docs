import React from "react"
import Header from "./header"
import Container from "./container"
import Footer from "./footer"
import SEO from "./seo"
const Layout = ({ location, title, children, searchIndex }) => {
  //  const rootPath = `${__PATH_PREFIX__}/`
  //  const isRootPath = location.pathname === rootPath
  return (
    <div className="global-wrapper" >
      <div id="root">
        <SEO
          title={"Home"}
        />
        <Header />
        <Container />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
