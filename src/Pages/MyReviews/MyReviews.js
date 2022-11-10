import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import MySingleReview from './MySingleReview';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const [myReviews, setMyReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        fetch(`https://printigo-server.vercel.app/my-reviews/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email, refresh])

    return (
        <div className=''>
            <HelmetProvider>
                <Helmet>
                    <title>My Reviews</title>
                    <meta name="description" content="My Reviews" />
                </Helmet>
            </HelmetProvider>
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
                            <th>Delete / Edit Review</th>
                        </tr>
                    </thead>
                    {
                        myReviews.map(review => <MySingleReview key={review._id} review={review} setRefresh={setRefresh} refresh={refresh} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyReviews;