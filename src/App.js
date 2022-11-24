import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'
import './App.css';

function App() {

  const container = useRef(null)

  useEffect(() => {
    var animDuraction =  10000;
    const anim = lottie.loadAnimation({
      container:container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: require('./cellphone.json')
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames= anim.totalFrames; 

      const frame = (maxFrames/100) * (scrollPosition / (duration/100));

      anim.goToAndPlay(frame, true); 
  
    }

    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuraction);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };

  }, []);


  return (
    
      <div className="App">
      <h1>A place in<br></br>the sun</h1>
      <p>Every summer, as 30 million people head to the<br></br> beautiful beaches of Italy, Spiagge is there to help <br></br>them find the perfect spot.</p>

      <p className= "text2"> Armed with new investments and ambitious plans for<br></br> the future, Italy’s “Airbnb of the beach” asked Belka <br></br>completely revamp their B2C mobile app for the new<br></br> season.</p>
      <div className='container' ref={container}></div>
      </div>
 
  );
}

export default App;
