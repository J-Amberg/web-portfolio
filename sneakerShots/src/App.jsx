import { useState, useEffect } from 'react';
import './App.css';
import Sneaker from './assets/sneaker1.png';
import Bulk from './assets/bulk.png';
import CustomSneaker from './assets/customsneakers.png';
import Authentication from './assets/authentication.png';

function App() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
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
    const baseMargin = 188; //baseMargin @ 1440p
    const margin = windowDimensions.width > 1440 ? (windowDimensions.width - 1440)/2 : 0; //left and right margins
    setMargin(margin + baseMargin);
    setContainerStyle({marginLeft:`${margin + baseMargin}px`, marginRight: `${margin + baseMargin}px`});
  }, [windowDimensions])

  return (
    <div id="background">
      {/* fonts from google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700;800&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      <div className='container' style={containerStyle}>
        <div className='karla yellowText'>
          <span id='brandName'>Sneaker Shots</span>
          <span className='navbarHeader'>Testimonials</span>
          <span className='navbarHeader' style={{marginRight:'82px'}}>Packages</span>
          <span className='navbarHeader' style={{marginRight:'82px'}}>About</span>
        </div>
        <div id='heroText' className='lora yellowText'>
          We'll Customize, Authenticate, and Clean Your Shoes
        </div>
        <span id='sneakerCircle' style={{right:`${margin - 57}px`}}></span>
        <img id='sneaker' src={Sneaker} alt='sneaker' style={{right:`${margin}px`}}/>
        <div className='bodyText karla yellowText' style={{marginTop:'35px', width:'304px'}}>
          The most reliable authenticators on the market.  24/7 customer support available.
        </div>
        <div id='aboutSection'>
            <span id='aboutUs' className='sectionHeader lora yellowText'>About Us</span>
            <div id='aboutText' className='bodyText yellowText karla'>
              Our team is passionate about sneakers and delivering the best possible customer experience to you. Look no further 
              if you are in the need of sneaker cleaning or authentication. Our expert authenticators are extremely accurate compared 
              to competitors, and offer reimbursement upon proof of any falsely authenticated shoes. We catch over 99% of fakes.
            </div>
        </div>
        <div id='packagesSection'>
          <span className='sectionHeader lora yellowText'>Packages</span>
          <div id='packagesSubHeader' className='h2Text lora yellowText' >Find The Perfect Option to suit your sole</div>
          <div id='packagesMiniHeader' className='bodyText yellowText karla'>
            We offer a variety of sneaker services for great prices. Services include sneaker cleaning, Sneaker Customization, Authentication 
            Services, and Middleman Authentication.
          </div>
          <div id='authenticitySection'>
            <div className='sectionHeader yellowText lora'>Authenticity Guarantee</div>
            <img id='authImage' src={Authentication} alt='authentication'/>
            <div id='authText' className='bodyText yellowText karla'>
              We guarantee to give you the most accurate results on the market. We catch over 99% of fake sneakers. 
            </div>
          </div>
          <div className='package'>
            <div className='sectionHeader lora orangeText packageHeader'>Sneaker Cleansing</div>
            <div className='h2Text yellowText lora packagePrice'>$20.00</div>
            <div className='bodyText yellowText karla packageDescription'>
              An expert will delicately clean your sneakers and make them look good as new or as good as possible. The process takes about one day 
              after we receive the shoes. 
            </div>
            <button className='packageButton'><span className='lora sectionHeader'>Order now</span></button>
          </div>
          <div className='package' style={{left:'360px'}}>
            <div className='sectionHeader lora orangeText packageHeader'>Authentication</div>
            <div className='h2Text yellowText lora packagePrice'>$10.00 or 3%</div>
            <div className='bodyText yellowText karla packageDescription'>
            An expert will authenticate your sneakers and mail them back to you with a certificate if the sneakers are authentic. Price is $10.00 or 
            % of sneaker price, whichever is higher.
            </div>
            <button className='packageButton'><span className='lora sectionHeader'>Order now</span></button>
          </div>
          <div className='package' style={{left:'720px'}}>
            <div className='sectionHeader lora orangeText packageHeader'>Middleman authentication</div>
            <div className='h2Text yellowText lora packagePrice'>$15.00 or 4%</div>
            <div className='bodyText yellowText karla packageDescription'>
            An expert will authenticate the sellers sneakers and then mail them to the buyer with an authentication certificate. Price is $15.00 or 4% of 
            sneaker price, whichever is higher.
            </div>
            <button className='packageButton'><span className='lora sectionHeader'>Order now</span></button>
          </div>
          {/*Sneaker photo and background circle*/}
          <div id='customSneakerCircle'></div>
          <img src={CustomSneaker} id='customSneaker' alt='custom sneaker'/>
          <div id='customizationSection'>
            <div className='sectionHeader orangeText lora packageHeader' >Sneaker Customization</div>
            <div className='h2Text yellowText lora packagePrice'>$100.00</div>
            <div className='bodyText yellowText karla packageDescription' style={{width:'428px', marginLeft:'48px'}}>
            One of our professional artists will customize your shoes based on a description you send. Details can include your favorite colors, topics, and 
            designs you want on the shoes. Price starts at $100 but varies by order based on the shoes. New or Like-New sneakers only.
            </div>
            <button className='packageButton' style={{width:'375px', left:'75px'}}><span className='lora sectionHeader'>Order now</span></button>
          </div>
          <div id='bulkSection'>
            <img src={Bulk} alt='bulk'></img>
            <div id='bulkSubsection'>
              <div className='sectionHeader yellowText lora'>Bulk services</div>
              <div className='h2Text yellowText lora' style={{marginTop:'16px'}}>Save when you order in bulk</div>
              <div className='bodyText yellowText karla' style={{marginTop:'15px'}}>
                Service 3 or more pairs 5% off. <br/>Service 10 or more pairs 10% off.<br/>Service 50 or more pairs 20% off.
              </div>
            </div>
          </div>
          <div id='testimonialSection'>
            <div className='sectionHeader yellowText lora' style={{textAlign:'center'}}>Testimonials</div>
            <div className='h2Text yellowText lora' id='testimonialSubheader'>Read what others have to say</div>
            <div className='testimonial'>
              <div className='sectionHeader orangeText lora testimonialName'>Kristopher Johnson</div>
              <div className='testimonialBody bodyText yellowText karla'>
                I've had 10 pairs authenticated with Sneaker Shots. They're reliable and even caught
               some fakes I was about to buy. Will definitely be using them in the future.
               </div>
            </div>
            <div className='testimonial' style={{left:'360px'}}>
              <div className='sectionHeader orangeText lora testimonialName'>Micheal Schumakher</div>
              <div className='testimonialBody bodyText yellowText karla'>
              Sneaker Shots customized 3 pairs of shoes for me. They look amazing andthe return time is unbeatable. I'm very happy with the service and am planning 
              on buying a pair for my girlfriend as well!                
            </div>
            </div>
            <div className='testimonial' style={{left:'720px'}}>
              <div className='sectionHeader orangeText lora testimonialName'>Tyson Meyers</div>
              <div className='testimonialBody bodyText yellowText karla'>
              I sell sneakers for a living and have used Sneaker Shots to  authenticate for over 200 sales. They haven't made a mistake yet. Best authentication service
               you'll find on the market.
               </div>
            </div>
          </div>
          <div id='footer'>
            <div  className='footerHeader karla yellowText' style={{textTransform:'uppercase'}}>Sneaker shots</div>
            <div className='footerHeader yellowText karla' style={{left:'239px'}}>Home</div>
            <div className='footerHeader yellowText karla' style={{left:'419px'}}>Contact</div>
            <div className='footerHeader yellowText karla' style={{left:'600px'}}>Pricing</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'239px', top: '40px'}}>About</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'419px', top: '40px'}}>Email</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'600px', top: '40px'}}>Cleansing</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'419px', top: '80px'}}>Twitter</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'600px', top: '80px'}}>Authentication</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'419px', top: '120px'}}>Instagram</div>
            <div className='bodyText yellowText karla' style={{position:'absolute', left:'600px', top: '120px'}}>Customization</div>
          </div>
        </div>
      </div>
      <div id='footerBar'/>
    </div>
  )
}

export default App
