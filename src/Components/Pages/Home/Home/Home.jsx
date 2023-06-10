import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstractor from '../PopularInstractor/PopularInstractor';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
                <title>LinGo | Home</title>
            </Helmet>


          <Banner></Banner> 
          <PopularClasses></PopularClasses>
          <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;