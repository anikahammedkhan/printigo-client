import React from 'react';
import Carousel from './Carousel';
import Contact from './Contact';
import CustomerReview from './CustomerReview';
import Quality from './Quality';
import ServiceSection from './ServiceSection';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Home</title>
                    <meta name="description" content="Home" />
                </Helmet>
            </HelmetProvider>
            <Carousel></Carousel>
            <ServiceSection></ServiceSection>
            <Quality></Quality>
            <CustomerReview></CustomerReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;