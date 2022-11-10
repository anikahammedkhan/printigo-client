import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (
        <div className=''>
            <div className='my-10'>
                <h1 className="text-3xl text-center font-bold text-cyan-500">My Reviews</h1>
            </div>

            {
                myReviews.length === 0 && <h1 className='text-2xl font-bold text-red-600 text-center my-40'>No Reviews Yet</h1>
            }

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Service Name & Date</th>
                            <th>Review</th>
                            <th>Ratings</th>
                            <th>Delete Review</th>
                        </tr>
                    </thead>
                    {
                        myReviews.map(review => <MySingleReview key={review._id} review={review} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyReviews;