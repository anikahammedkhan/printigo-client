import React from 'react';
import Carousel from './Carousel';
import Contact from './Contact';
import CustomerReview from './CustomerReview';
import Quality from './Quality';
import ServiceSection from './ServiceSection';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ServiceSection></ServiceSection>
            <Quality></Quality>
            <CustomerReview></CustomerReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;