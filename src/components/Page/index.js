import PageContent from "../PageContent";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

import { capitalizeFirstLetter } from "../../utils/helpers";

function Page(props) {
  const { currentPage } = props;
  
  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default: 
        return <About />;
    }
  };

  return (
    <section className="page">
      <h2 className="page-title">{capitalizeFirstLetter(currentPage.name)}</h2>
      <div className="page-content">
        <PageContent>{renderPage()}</PageContent>
      </div>
    </section>
  )
};

export default Page;