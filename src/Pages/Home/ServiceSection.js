import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceSectionCard from './ServiceSectionCard';

const ServiceSection = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/limit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-5 px-3'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-bold my-3 text-cyan-500'>My Services</h1>
                <p className='font-semibold text-base md:text-lg text-slate-600'>I own a reliable and affordable digital agency and talent network. I channel creativity, colors, <br /> copy and print facility to help my customer with better branding.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    services.map(service => <ServiceSectionCard key={service._id} service={service}></ServiceSectionCard>)
                }
            </div>
            <div className='text-center my-8'>
                <button className='btn btn-outline btn-info'><Link to="/services">See All Services</Link></button>
            </div>
        </div>
    );
};

export default ServiceSection;