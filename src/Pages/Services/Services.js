import React, { useContext, useEffect, useState } from 'react';
import ServiceSectionCard from '../Home/ServiceSectionCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../Context/UserContext';

const Services = () => {

    const { loading } = useContext(AuthContext);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://printigo-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return (
            <div className='w-full h-[600px] flex items-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600 mx-auto"></div>
            </div>
        )
    }


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