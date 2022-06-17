import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const SideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 7
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            month
            familiarDate: date(formatString: "dddd MMMM Do, YYYY")
            dayOfWeek: date(formatString: "dddd")
            year: date(formatString: "YYYY")
            day: date(formatString: "Do")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const sixPosts = data.allMdx.nodes;
  const threePosts = data.allMdx.nodes.slice(0, 4);
  console.log(sixPosts, threePosts);

  const DESKTOP_WINDOW_BREAKPOINT = 1200;
  const MOBILE_WINDOW_BREAKPOINT = 800;
  let checkIsMobileView = () =>
    window ? window.innerWidth < MOBILE_WINDOW_BREAKPOINT : false;
  let checkIsDesktopView = () =>
    window ? window.innerWidth > DESKTOP_WINDOW_BREAKPOINT : true;
  const [isDesktop, setIsDesktop] = useState(checkIsDesktopView);

  const [isMobile, setIsMobile] = useState(checkIsMobileView);

  const updatePageWidth = () => {
    setIsDesktop(checkIsDesktopView);
    setIsMobile(checkIsMobileView);
    console.log(checkIsDesktopView, checkIsMobileView);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", updatePageWidth);
      return () => window.removeEventListener("resize", updatePageWidth);
    }
  });

  return (
    <aside>
      <h4>Most recent entries:</h4>
      <div>
        {isDesktop || isMobile
          ? threePosts.map(({ excerpt, frontmatter, fields }) => (
              <section class="block  side-bar">
                <Link to={fields.slug}>
                  <h3 class="line-thin">{frontmatter.title}</h3>
                  <p class="date futura">
                    <a title={frontmatter.familiarDate}>
                      {frontmatter.dayOfWeek} {frontmatter.month}{" "}
                      {frontmatter.day}, {frontmatter.year}
                    </a>
                  </p>
                  <p class="line">{excerpt}</p>
                </Link>
              </section>
            ))
          : sixPosts.map(({ excerpt, frontmatter, fields }) => (
              <section class="block  side-bar">
                <Link to={fields.slug}>
                  <h3 class="line-thin">{frontmatter.title}</h3>
                  <p class="date futura">
                    <a title={frontmatter.familiarDate}>
                      {frontmatter.dayOfWeek} {frontmatter.month}{" "}
                      {frontmatter.day}, {frontmatter.year}
                    </a>
                  </p>
                  <p class="line">{excerpt}</p>
                </Link>
              </section>
            ))}
      </div>
      <Link to="/blog/archive">
        <h4 class="link">See all posts</h4>
      </Link>
    </aside>
  );
};

export default SideBar;
