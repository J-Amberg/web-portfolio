import { useState, useEffect } from 'react';
import './App.css';
import Home from './voyager/Home.jsx';
import RTPlanningTool from './voyager/RTPlanningTool';
import USAStateChecklist from './voyager/USAStateChecklist';

function App() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  //get viewport width and height, https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [containerStyle, setContainerStyle] = useState({});
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    const baseMargin = 55; //baseMargin @ 1440p
    const tempMargin = windowDimensions.width > 1440 ? (windowDimensions.width - 1440) / 2 : 0; //left and right margins
    setMargin(tempMargin + baseMargin);
    setContainerStyle({
      marginLeft: `${tempMargin + baseMargin}px`,
      marginRight: `${tempMargin + baseMargin}px`,
    });
  }, [windowDimensions]);

  const [selectedTab, setSelectedTab] = useState('home');
  const selectedStyle = { color: 'white', textDecoration: 'underline' }; //navbar text when a page is selected

  //reveal in animation
  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('reveal-animation');
      }
    });
  });
  const viewbox = document.querySelectorAll('.reveal');
  viewbox.forEach(ele => {
    observer.observe(ele);
  });
  return (
    <div>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link
        href='https://fonts.googleapis.com/css2?family=Comme:wght@400;500;700&family=Delius+Unicase&family=Enriqueta:wght@400;500;600;700&family=Gowun+Dodum&display=swap'
        rel='stylesheet'
      />
      <div className='click'>
        <div className='click'>
          <div className='click'>Click Me</div>
        </div>
      </div>
      <div style={containerStyle}>
        {/*Navbar*/}
        <div className='navText mt-[33px]'>
          <span className='mr-[360px]'>VOYAGER</span>
          <span
            className='mr-[80px]'
            style={selectedTab === 'home' ? selectedStyle : {}}
            onClick={() => setSelectedTab('home')}
          >
            Home
          </span>
          <span
            className='mr-[80px]'
            style={selectedTab === 'RTPlanningTool' ? selectedStyle : {}}
            onClick={() => setSelectedTab('RTPlanningTool')}
          >
            Road Trip Planning Tool
          </span>
          <span
            style={selectedTab === 'USAStateChecklist' ? selectedStyle : {}}
            onClick={() => setSelectedTab('USAStateChecklist')}
          >
            USA State Checklist
          </span>
        </div>
        {selectedTab === 'home' && <Home />}
        {selectedTab === 'RTPlanningTool' && <RTPlanningTool margin={margin}/>}
        {selectedTab === 'USAStateChecklist' && <USAStateChecklist />}
      </div>
    </div>
  );
}

export default App;
