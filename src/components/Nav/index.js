import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function Nav(props) {
  const { 
    pages,
    setCurrentPage,
    currentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]); // NOTE: The second argument means: only re-run the effect if currentPage changes!

  

  return (
    <nav className="">
      <ul className="flex-row" id="">
        {pages.map((Page) => (
          <li 
            className={`mx-2 ${currentPage.name === Page.name ? 'navActive' : null}`}
            key={Page.name}
          >
            <span onClick={() => setCurrentPage(Page)}>
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
      {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
      {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a> */}
    </nav>
  );
};

export default Nav;