import React, { useEffect } from 'react';
import Nav from './nav.js';
import BackButton from './backbutton.js';

function Article({ children }) {
  useEffect(() => {
    const getScroll = () => {
      document.body.style.setProperty('--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    window.addEventListener('scroll', getScroll, false);

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, []);

  return (
    <React.Fragment>
      {children}
      <Nav currentPage="Article" />
      <BackButton />
    </React.Fragment>
  );
}

export default Article;