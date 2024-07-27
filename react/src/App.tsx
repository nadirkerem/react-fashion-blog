import Header from './components/header/Header';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';

import { siteData } from './data/data';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        {siteData.articles.map((article, index) => (
          <React.Fragment key={index}>
            <Article article={article} />
            <hr className='custom-hr' />
          </React.Fragment>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
