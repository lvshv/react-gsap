import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import './App.scss';
import arrow from './images/arrow-right.svg';
import men_one from './images/men1.jpg';
import men_two from './images/men2.jpg';

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(
        girlImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        boyImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      'Start'
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, []);
  return (
    <div className='hero' ref={(el) => (app = el)}>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content__inner' ref={(el) => (content = el)}>
              <h1>
                <div className='hero-content__line'>
                  <div className='hero-content__line-inner'>
                    Relieving the burden
                  </div>
                </div>
                <div className='hero-content__line'>
                  <div className='hero-content__line-inner'>
                    of disease caused
                  </div>
                </div>
                <div className='hero-content__line'>
                  <div className='hero-content__line-inner'>by behavior.</div>
                </div>
              </h1>
              <p>
                Hello ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, suscipit odit sequi mollitia ab et ratione commodi
                ad.
              </p>
              <div className='btn-row'>
                <button className='explore-button'>
                  explore
                  <div className='arrow-icon'>
                    <img src={arrow} alt='arrow' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='hero-images'>
            <div className='hero-images__inner' ref={(el) => (images = el)}>
              <div className='hero-image girl'>
                <img src={men_one} alt='' />
              </div>
              <div className='hero-image boy'>
                <img src={men_two} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
