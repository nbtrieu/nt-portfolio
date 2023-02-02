import PageContent from "../PageContent";
import About from "../About";

import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      default: 
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  )
};

export default Page;