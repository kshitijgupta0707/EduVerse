import React, { useEffect, useState } from 'react'
import { Hero, NavBar, Programs, Title, About, Campus, Testimonials, ContactUs, Footer } from './Components/index'
import { Element } from 'react-scroll';
import { useNavBarContext } from './Context/NavBarContextProvider';
const App = () => {

  const [playState, setPlayState] = useState(false);
  const { darkMode , hidden } = useNavBarContext();
  useEffect(()=>{
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  } ,[darkMode])

  return (
    <div className={` normal ${hidden ? "" :"rotate-on-header-open"}`} >


      <Element name='home' >
        <NavBar />
        <Hero />
      </Element>

      <div className='container' >
        <Element name='programs'  >
          <Title subtitle="our program" title="what we offer" />
          <Programs />
        </Element>

        <Element  >
          <About setPlayState={setPlayState} name='about' />
        </Element>

        <Element name='campus' >
          <Title subtitle="Gallery" title="Campus photos" />
          <Campus />
        </Element>

        <Element name='testinomials' >
          <Title subtitle="Testinomials" title="What Student Says" />
          <Testimonials />
        </Element>

        <Element name='contact' >
          <Title subtitle="contact us" title="Get in Touch" />
          <ContactUs />

        </Element>
        <Footer />

      </div>

      {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}

    </div>
  )
}

export default App