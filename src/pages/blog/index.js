import * as React from "react"

import Layout from "../../components/blog/layout"
import SideBar from "../../components/blog/side-bar"
import About from "./about"

const HomePage = () => {
  return (
    <Layout>
      <div class="flex-container">
        <div>
          <SideBar />
        </div>
        <About />
      </div>
    </Layout>
  )
}

export default HomePage
