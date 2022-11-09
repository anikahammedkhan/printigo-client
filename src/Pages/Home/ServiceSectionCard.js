import React from 'react';
import { Link } from 'react-router-dom';


const ServiceSectionCard = ({ service }) => {

    const { categoryID, details, image, rating, title, users, _id } = service;

    const shortDetails = details.slice(0, 100);


    return (
        <div className="card w-92 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='h-[300px] w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{shortDetails}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/services/${_id}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;