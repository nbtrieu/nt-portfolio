import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

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
    <nav>
      <ul className="flex-row">
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
    </nav>
  );
};

export default Nav;