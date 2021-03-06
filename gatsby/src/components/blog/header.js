import React from "react";
import { useSiteMetadata } from "../../utils/use-site-metadata";

const Header = () => {
  const { blogTitle, blogDescription } = useSiteMetadata();
  return (
    <header class="header line-thin">
      <h1 class="title masq">{blogTitle}</h1>
      <p class="futura line-blue sub-title">{blogDescription}</p>
    </header>
  );
};

export default Header;
