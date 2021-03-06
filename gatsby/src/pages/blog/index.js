import * as React from "react";

import Layout from "../../components/blog/layout";
import SideBar from "../../components/blog/side-bar";
import About from "./about";

const BlogHomePage = () => {
  return (
    <Layout>
      <div class="flex-container flex-r">
        <div>
          <SideBar />
        </div>
        <About />
      </div>
    </Layout>
  );
};

export default BlogHomePage;
