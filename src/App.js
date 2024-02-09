// App.jsx
import React, { useEffect, useState } from 'react';
import './App.scss';
import backgroundMusic from './Horsepower.mp3';
import loveSong from './cheer.mp3'; // Import the love song


function App() {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    // Cleanup function for when the component unmounts
    return () => {
      // Pause and reset audio
      if (audioStarted) {
        const audio = new Audio(backgroundMusic);
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audioStarted]);

  const playAudio = () => {
    if (!audioStarted) {
      let audioSrc = backgroundMusic;
      let loopAudio = true;
      // Check if "Yes" checkbox is checked
      const yesCheckbox = document.getElementById('Yes');
      if (yesCheckbox.checked) {
        audioSrc = loveSong;
        loopAudio = false;
      }
      const audio = new Audio(audioSrc);
      audio.loop = loopAudio;
      audio.play();
      setAudioStarted(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className='intro-saf waviy'>
          <span>Hi Safiya</span>
        </p>
        {/* Scroll Down Button */}
        <section id="section04" className="demo first-demo">
          <div className="link-container">
            <a href="#section05" onClick={playAudio}><span></span>Hi Abeer</a>
            <p className='arrow'> ←click</p>
          </div>
        </section>
      </header>

      <section className="App-header">
        <header id="section05">
          <p className='first-text'>Mb for being late</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section05" className="demo next-demo">
          <a href="#section06"><span></span>Its okay you are amazing</a>
        </section>
      </section>

      <section className="App-header">
        <header id="section06">
          <p className='first-text'>Thanks!! 🥳</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section06" className="demo next-demo">
          <a href="#section07"><span></span>No problem Abeer!</a>
        </section>
      </section>

      <section className="App-header">
        <header id="section07">
          <p className='first-text'>...</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section07" className="demo next-demo">
          <a href="#section08"><span></span>What?</a>
        </section>
      </section>


      <section className="App-header">
        <header id="section08">
          <p className='first-text'>I can make you say anything</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section08" className="demo next-demo">
          <a href="#section09"><span></span>Stop</a>
        </section>
      </section>


      <section className="App-header">
        <header id="section09">
          <p className='first-text'>What is your opinion on racism?</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section09" className="demo next-demo">
          <a href="#section10"><span></span>I HATE minorities 💩</a>
        </section>
      </section>


      <section className="App-header">
        <header id="section10">
          <p className='first-text'>Wow jheez</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section10" className="demo next-demo">
          <a href="#section11"><span></span>Yup!</a>
        </section>
      </section>


      <section className="App-header">
        <header id="section11">
          <p className='first-text'>Anyways I was wondering</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section11" className="demo next-demo">
          <a href="#section12"><span></span>What 😑</a>
        </section>
      </section>


      <section className="App-header">
        <header id="section12">
          <p className='first-text'>If you would like to</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section12" className="demo next-demo">
          <a href="#section13"><span></span>Be my...</a>
        </section>
      </section>

      <section className="App-header">
        <header id="section13">
          <p className='first-text'>Stop let me say it</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section13" className="demo next-demo">
          <a href="#section14"><span></span>Yk ur talking to urself rn right</a>
        </section>
      </section>


      <section className="App-header">
        <header id="section14">
          <p className='first-text'>If you would you like to...</p>
        </header>
        {/* "What" Scroll Down Button */}
        <section id="section14" className="demo next-demo">
          <a href="#section15"><span></span></a>
        </section>
      </section>


      <section className="App-header">
        <header id="section15">
          <div className="centered">
            <h4 className="message intro-saf">Be my Valentine?</h4>
            <input className="checkbox-input no" type="checkbox" name="answer" id="No" />
            <label className="checkbox-label no">No</label>
            <input className="checkbox-input yes" type="checkbox" name="answer" id="Yes" />
            <label className="checkbox-label yes" onClick={playAudio} htmlFor="Yes">Yes</label>
            <div className="answer--yes"></div>
            <div className="answer--no"></div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default App;
