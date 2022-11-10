import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceSectionCard = ({ service }) => {

    const { details, image, title, _id } = service;

    const shortDetails = details.slice(0, 100);


    return (
        <div className="card w-92 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img src={image} alt="Shoes" className='h-[300px] w-full' /></figure>
                </PhotoView>
            </PhotoProvider>
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