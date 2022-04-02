import '../assets/css/about.css';
import React, { useEffect, useState } from 'react';
import Section from '../Components/Section';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Carousel from '../Components/Carousel';

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

const illustrations = [
  {
    image: 'illustrations/thoma.jpg',
    text: 'Genshin Impact fanart. September 2021.'
  },
  {
    image: 'illustrations/yuta.png',
    text: 'Jujutsu Kaisen 0 fanart. March 2022.'
  },
  {
    image: 'illustrations/aki.jpg',
    text: 'Chainsaw Man fanart. April 2022.'
  },
  {
    image: 'illustrations/delusion-childe.png',
    text: 'Genshin Impact fanart. July 2021.'
  },
  {
    image: 'illustrations/snow-childe.png',
    text: 'Genshin Impact fanart. August 2021.'
  }
];

function About() {
  useEffect(() => {
    const getScroll = () => {
      document.body.style.setProperty('--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }

    window.addEventListener('scroll', getScroll, false);
    window.scrollTo(0, 0);

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
          <img key={image} src={`./img/assets/${image}.png`} alt="" className={`${className}`} />
          <p className={`${className}__caption`}>{caption}</p>
        </span>
      )
    })
  }

  return (
    <React.Fragment>
      <Section name="intro">
        <img src='./img/assets/starburst.png' alt="" className="intro__image" />
        <div className="content intro__content">
          <h2>Hi! I'm Bella.</h2>
          <p>
            I am a first-year student at the University of Washington intending on majoring in Informatics. I started out 100% sure I wanted to be a graphic designer, but I unexpectedly fell in love with web programming instead. Now, I strive to bridge the worlds between visual communication and technology. If I’m able to make even one person’s life easier or more enjoyable through my creations, then I can be satisfied.
          </p>
          <p>
            I’m currently working on UX Design, Back-End Development, and Web Development for the Stoma Project in the Sensors, Energy, and Automation Laboratory, as well as Graphic Design for @smirk_uw on Instagram.
          </p>
          <p>
            In my own time, I like to create illustrations of my favorite characters, record covers of my favorite songs, and dance in my room as I play my favorite playlist through my Bluetooth speaker. If I’m not on campus, you can most definitely find me at my favorite restaurant, Meesum Pastry, indulging in the nostalgic and comforting taste of Taiwanese cuisine.
          </p>
        </div>
      </Section>

      <Section name="blurb">
        <div className="content blurb__content">
          <h2>Redefining home.</h2>
          <p>San Diego, Fremont, Hsinchu, Taichung, Kaohsiung, Seattle.</p>
          <p>
            A big move has marked the beginning of every new chapter of my life, from childhood to adulthood, foolishness to maturity. Though I was able to experience various cultures, ideas, and people, I never really had a place I considered “home”.
          </p>
          <p>
            With the turn of each page, I lamented my lack of a reliable anchor point. I desired a place to call my hometown, to grow up with childhood friends with shared memories and secrets.
          </p>
          <p>
            One night, as I looked around me and saw the faces of my smiling friends, I had an epiphany. “Home” did not have to be a defined area; that definition is merely a suggestion, merely a construct. Stories shared over barbecue on a Friday night. Singing our favorite songs as we stroll around the art museum. Laughing so hard that we’re sure six-pack abs will appear the next morning. Home. I’ve found home in the areas where our varied worlds with different backgrounds, ideas, and perspectives overlap, where they come together to lay the foundation for our shared memories and experiences. My new realization of home has made me proud of my identity, cherish those I have around me, and able to find solace no matter where my story takes place.
          </p>
        </div>
        <img src="./img/assets/anchor.png" alt="" className="blurb__image" />
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
        <Carousel items={illustrations} />
      </Section>

      <Footer />
      <Nav currentPage="About" />
    </React.Fragment>
  )
}

export default About;