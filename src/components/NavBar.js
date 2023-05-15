import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const nav = links.map((link) =>{
    return   <a href={`#${link}`} key={link}> {link}</a>
  })

  return (
  <nav>{/* display an <a> tag for each link here */} {nav} </nav>);
}

export default NavBar;
