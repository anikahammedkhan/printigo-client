import React, { useEffect, useState } from 'react';
import ServiceSectionCard from '../Home/ServiceSectionCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://printigo-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='my-5 px-3'>
            <HelmetProvider>
                <Helmet>
                    <title>Services</title>
                    <meta name="description" content="Services" />
                </Helmet>
            </HelmetProvider>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-bold my-3 text-cyan-500'>My Services</h1>
                <p className='font-semibold text-base md:text-lg text-slate-600'>I own a reliable and affordable digital agency and talent network. We channel creativity, colors, <br /> copy and print facility to help our customer with better branding.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    services.map(service => <ServiceSectionCard key={service._id} service={service}></ServiceSectionCard>)
                }
            </div>
        </div>
    );
};

export default Services;