import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://printigo-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setRefresh(!refresh)
            })
    }, [id, refresh])

    return (
        <div>
            <div className='my-10'>
                <h1 className='text-4xl font-bold text-cyan-500 text-center'>Look What People Say About <br /> My Service</h1>
            </div>
            {
                reviews.length === 0 && <h1 className='text-2xl font-bold text-red-600 text-center my-40'>No Reviews Yet</h1>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Review;