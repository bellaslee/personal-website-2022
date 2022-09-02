import React, { useEffect } from 'react';
import Section from '../components/section';
import Footer from '../components/footer';
import Nav from '../components/nav';
import ScrollIndicator from '../components/scrollIndicator';
import Head from 'next/head';
import Gallery from '../components/gallery';

const hobbyImgs = [
  {
    image: 'guitar',
    caption: 'playing fingerstyle guitar'
  },
  {
    image: 'coffee',
    caption: 'coffee'
  },
  {
    image: 'illust',
    caption: 'creating illustrations'
  },
  {
    image: 'singing',
    caption: 'singing'
  },
  {
    image: 'anime',
    caption: 'anime and manga'
  }
];

function About() {
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

  /**
   * Generates the images needed for a section from an array of image filenames.
   * @param {Array} imgs - array of images needed.
   * @param {String} className - the class name for the image.
   * @returns {Element} - img tags with proper key, src, and alt.
   */
  function genImages(imgs, className) {
    return imgs.map((img) => {
      const { image, caption } = img;
      return (
        <span className={`${className}__container ${className}__${image}`}>
          <img key={image} src={`../img/assets/${image}.png`} alt="" className={`${className}`} />
          <p className={`${className}__caption`}>{caption}</p>
        </span>
      )
    })
  }

  return (
    <>
      <Head>
        <title>about | bella lee</title>
        <meta property="og:title" content="about | bella lee" key="title" />
      </Head>
      <Section name="intro">
        <h2>Hi, I'm Bella!</h2>
        <ScrollIndicator position="100" />
      </Section>

      <Section name="hobby">
        <div className="content hobby__content">
          <h2>Outside of work and studies, I like...</h2>
        </div>
        <div className="hobby__images">
          {genImages(hobbyImgs, 'hobby__image')}
        </div>
      </Section>

      <Section name="illustrations">
        <h2>I'm a big fan of pretty fictional characters.</h2>
        <p>
          If you're interested in commissioning an illustration, you can find more information <a href="http://peachyxin.com/commissions" target="_blank" rel="noreferrer">here</a>.
        </p>
        <Gallery />
      </Section>

      <Footer />
      <Nav currentPage="About" />
    </>
  )
}

export default About;