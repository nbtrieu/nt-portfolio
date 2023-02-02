import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';
import { useState } from 'react';

function App() {
  const [pages] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ]);
  // NOTE: No need 'setPage' because we're not gonna be updating/changing the pages!

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <div className="App">
      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
