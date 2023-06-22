import { HeroImages, TSImages, ReviewImages } from './images';

export default function Home() {

  //reveal in animation
  const observerLeft = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('reveal-left-animation');
      }
    });
  });
  const observerRight = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('reveal-right-animation');
      }
    });
  });

  let viewbox = document.querySelectorAll('.revealLeft');
  viewbox.forEach(ele => {
    observerLeft.observe(ele);
  });
  viewbox = document.querySelectorAll('.revealRight');
  viewbox.forEach(ele => {
    observerRight.observe(ele);
  });

  return (
    <div className='h-[4450px]'>
      <div id='hero' className='relative h-[810px] '>
        <div className='h1 w-[480px] absolute top-[80px]'>
          From road trips to all inclusive Exotic getaways, we've got you covered.
        </div>
        <div className='bodyText w-[480px] absolute top-[590px]'>
          Voyager is invested in ensuring your travels are safe, affordable and exciting. We provide
          services to find the perfect destination for you, map a road trip, find the most
          affordable flight for you, or simply brainstorm ideas for your next vacation.
        </div>
        <img
          className='absolute w-[329px] h-[185px] rounded left-[728px] top-[42px]'
          src={HeroImages.greatBarrierReef}
          alt='great barrier reef'
        ></img>
        <img
          className='absolute w-[301px] h-[226px] rounded left-[476px] top-[253px]'
          src={HeroImages.hooverDam}
          alt='hoover dam'
        ></img>
        <img
          className='absolute w-[265px] h-[265px] rounded-lg left-[797px] top-[245px]'
          src={HeroImages.sandDunes}
          alt='sand dunes'
        ></img>
        <img
          className='absolute w-[260px] h-[301px] rounded left-[1078px] top-[210px]'
          src={HeroImages.beach}
          alt='beach'
        ></img>
        <img
          className='absolute w-[308px] h-[205px] rounded-lg left-[535px] top-[527px]'
          src={HeroImages.beach2}
          alt='beach'
        ></img>
        <img
          className='absolute w-[375px] h-[275px] rounded-xl left-[876px] top-[520px]'
          src={HeroImages.cathedral}
          alt='cathedral'
        ></img>
      </div>

      <div id='services' className='relative top-[132px] h-[1433px]'>
        <div className='h2'>Tools & Services</div>
        {/*Airlines*/}
          <div className='sectionHeader absolute left-[57px] top-[128px]'>Affordable Airlines</div>
          <div className='bodyText absolute left-[57px] top-[222px] w-[494px]'>
            Simply send us dates and destinations you'd like to go and we'll find the most affordable
            and safe flights for you!
          </div>
          <img
            className=' absolute w-[391px] h-[362px] left-[847px] top-[128px] transform -scale-x-100'
            src={TSImages.airplane}
            alt='airplane'
          />
        {/*road trip planning tool*/}
          <div className='sectionHeader absolute left-[570px] top-[570px]'>
            Road trip planning tool
          </div>
          <div className='bodyText absolute left-[570px] top-[666px] w-[641px]'>
            Send a list of destinations you'd like to see and things you like to do. We'll piece it
            all together with the most brilliant destinations in the area! Select hotels or camping
            and we'll find the best stays as well!
          </div>
          <img
            className='absolute w-[512px] h-[342px] left-[0px] top-[570px]'
            src={TSImages.stationWagon}
            alt='station wagon'
          />
        {/*usa state checklist*/}
          <div className='sectionHeader absolute left-[111px] top-[1044px]'>usa state checklist</div>
          <div className='bodyText absolute left-[111px] top-[1140px] w-[538px]'>
            An interactive map where you can track states you've visited and see which states you have
            yet to visit!
          </div>
          <img
            className='absolute w-[488px] h-[389px] left-[721px] top-[1044px]'
            src={TSImages.checklist}
            alt='checklist'
          />
      </div>

      <div id='reviews' className='relative top-[264px] h-[1597px'>
        <div className='h2'>Reviews</div>
        <div id='review1' className=' mt-[20px]'>
          <ReviewCard
            name='Mary Lou'
            height='223'
            body='Voyager helped us plan a vacation to the Caribbeans to an all inclusive resort. The cost was cheaper than anything we could find online. Great service, 10/10 recommend.'
            reveal='left'
          />
        </div>
        <div id='review2' className='ml-[586px] mt-[39px]'>
          <ReviewCard
            name='Ali al-hammad'
            height='262'
            body='Wanted to take a road trip around Europe with my brother, voyager made it simple! We just had to send some destinations we wanted to go to and interests and they planned it out for us!'
            reveal='right'
          />
        </div>
        <div id='reiview3' className='mt-[39px]'>
          <ReviewCard
            name='Micheal Tyson'
            height='340'
            body='In the process of planning my second vacation with Voyager. Was looking to take a road trip around the U.S. in 2 weeks around the west coast and see 
          as much nature as I could. My agent found the perfect destinations for me and I went on the most beautiful hikes of my life! They even found campsites for me to stay at every night. '
            reveal='left'
          />
        </div>
        <div id='review4' className='mt-[39px] ml-[586px]'>
          <ReviewCard
            name='Megan Wibmer'
            height='301'
            body="Couldn't find any service online that would help me plan a road trip around Australia. Voyager did it and did it well! I saw so many cool things I 
        wouldn't have known about if I didn't use this service. Highly recommend, you won't regret it"
            reveal='right'
          />
        </div>
        <div id='review5' className='mt-[39px]'>
          <ReviewCard
            name='Allan Sangreen'
            height='223'
            body="Voyager helped me and my wife plan our honeymoon. Our week in Hawaii was amazing, I'll definitely be using Voyager again!"
            reveal='left'
          />
        </div>
      </div>
      <Footer top={265} />
    </div>
  );
}

function FiveStars() {
  return (
    <div>
      <img className='h-[33px] inline' src={ReviewImages.star} alt='star' />
      <img className='h-[33px] inline' src={ReviewImages.star} alt='star' />
      <img className='h-[33px] inline' src={ReviewImages.star} alt='star' />
      <img className='h-[33px] inline' src={ReviewImages.star} alt='star' />
      <img className='h-[33px] inline' src={ReviewImages.star} alt='star' />
    </div>
  );
}

function ReviewCard({ name, body, height, reveal }) {
  const revealLeftStyle = 'relative bg-smoky w-[737px]  rounded-2xl revealLeft'
  const revealRightStyle = 'relative bg-smoky w-[737px]  rounded-2xl revealRight'
  return (
    <div className={reveal === 'left' ? revealLeftStyle : revealRightStyle} style={{ height: `${height}px` }}>
      <div className='sectionHeader absolute top-[5px] left-[15px]'>{name}</div>
      <div className='absolute top-[15px] left-[541px]'>
        <FiveStars />
      </div>
      <div className='absolute top-[89px] bodyText w-[706px] left-[15px]'>{body}</div>
    </div>
  );
}

export function Footer({ top }) {
  return <div id='footer' className='relative h-[120px]' style={{ top: `${top}px` }}>
    <div className='relative h-[27px] left-[171px] mt-[120px] w-[980px]'>
      <span className='footerText uppercase mr-[152px] font-bold'>Voyager</span>
      <span className='footerText uppercase mr-[189px]'>Contact</span>
      <span className='footerText uppercase mr-[154px]'>Socials</span>
      <span className='footerText uppercase'>Services</span>
    </div>
    <div className='relative  h-[27px] left-[416px] mt-[26px] w-[730px] '>
      <span className='footerText uppercase mr-[155px]'>Book a call</span>
      <span className='footerText uppercase mr-[147px]'>twitter</span>
      <span className='footerText uppercase'>plan a roadtrip</span>
    </div>
    <div className='relative  h-[27px] mt-[26px] left-[696px] w-[450px]'>
      <span className='footerText uppercase mr-[119px]'>instagram</span>
      <span className='footerText uppercase'>Exotic getaways</span>
    </div>
    <div className='relative  h-[27px] mt-[26px] left-[696px] w-[500px]'>
      <span className='footerText uppercase mr-[133px]'>facebook</span>
      <span className='footerText uppercase'>affordable airlines</span>
    </div>
    <div className='h-[0px] overflow-y-hidden'>
      <div className='z-[-1] left-[-30vw] absolute top-[-250px] elipse w-[140vw] h-[50vh] '></div>
    </div>
  </div>
}