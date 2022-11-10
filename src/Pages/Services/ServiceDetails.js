import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Lottie from "lottie-react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import printing from "../../Assets/Lottie/printing.json";
import orderNow from "../../Assets/Lottie/order-now.json";
import Review from '../Review/Review';
import AddReview from '../Review/AddReview';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ServiceDetails = () => {

    const data = useLoaderData();
    const { details, image, ratings, title, users, _id, price } = data;
    return (
        <div className='my-5'>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={title} />
                </Helmet>
            </HelmetProvider>
            <div className='text-center'>
                <h1 className='bg-red-500 inline  p-2 text-white'>Service Details</h1>
            </div>
            <div>
                <div className='grid grid-cols-4'>
                    <div className='col-span-3 p-4'>
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='w-full rounded-lg' src={image} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className='p-4'>
                        <div className='w-3/4'>
                            <Lottie animationData={printing} loop={true} />;
                        </div>
                        <h3 className='text-4xl font-bold text-cyan-500'>Details</h3>
                        <p className='text-2xl font-bold'>{title}</p>
                        <p className='text-gray-500 font-semibold text-2xl'>Users: {users}</p>
                        <p className='text-gray-500 font-semibold text-2xl'>Users Rating: {ratings}</p>
                        <p className='text-gray-500 font-semibold text-2xl'>Price : {price}$</p>
                        <div>
                            <Lottie animationData={orderNow} loop={true} />;
                        </div>
                        <button className='btn btn-success w-full font-bold text-white mb-3'>Place Order</button>
                        <button className='btn btn-info w-full font-bold text-white'><Link to="/services">Back to services page</Link></button>
                    </div>
                </div>
                <div className='px-12'>
                    <h2 className='text-4xl font-bold text-cyan-500 '>{title}</h2>
                    <p className='text-gray-500'>{details}</p>
                </div>
            </div>
            <Review id={_id}></Review>
            <AddReview id={_id} title={title}></AddReview>
        </div>
    );
};

export default ServiceDetails;