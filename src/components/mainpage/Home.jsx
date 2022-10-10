import React from 'react';
import "./Home.css"
import Categories from './Categories';
import SliderHome from './Slider';



const Home = () => {
    return (
      <>
       <section className='home'>
        <div className='container d_flex'></div>
          <Categories/>
          <SliderHome/>
       </section>
      </>
    );
  };
  export default Home;