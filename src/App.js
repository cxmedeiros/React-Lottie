import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'
import './App.css';

function App() {

  const container = useRef(null)
  const [red, green, blue] = [14, 78, 255]
  const section1 = document.querySelector('.section1')


  useEffect(() => {
    var animDuraction =  10000;
    const anim = lottie.loadAnimation({
      container:container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: require('./lottie.json')
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames= anim.totalFrames; 

      const frame = (maxFrames/100) * (scrollPosition / (duration/100));

      anim.goToAndStop(frame, true); 
  
    }

    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuraction);
    };

    document.addEventListener("scroll", onScroll);

    window.addEventListener('scroll', () => {
      const y = 1 + (window.scrollY || window.pageYOffset) / 250
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
      section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };

},);


  return (
    <div className="section1">
      <div className="App">
      
        <text>
          <h1>A place in<br></br>the sun</h1>
          <p>Every summer, as 30 million people head to the<br></br> beautiful beaches of Italy, Spiagge is there to help <br></br>them find the perfect spot.</p>

          <p className= "text2"> Armed with new investments and ambitious plans for<br></br> the future, Italy’s “Airbnb of the beach” asked Belka <br></br>completely revamp their B2C mobile app for the new<br></br> season.</p>
        </text>
        <div className='container' ref={container}></div>
      </div>
    </div>
 
  );
}

export default App;
