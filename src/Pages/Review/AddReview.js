import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const AddReview = ({ id, title }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const serviceId = id;


    // current date and time
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    const handleAddReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName || "Anonymous";
        const email = user?.email || "Anonymous";
        const date = dateTime;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const image = user?.photoURL || "https://placeimg.com/192/192/people";

        // post data created by user to database
        const reviewData = {
            name,
            email,
            date,
            ratings,
            details,
            serviceId,
            image,
            title
        }

        if (!user) {
            navigate('/login', { state: { from: location } });
        }
        else {
            fetch('https://printigo-server.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Review added successfully');
                        form.reset();
                    }
                })
        }
    }
    return (
        <div className="flex flex-col max-w-xl p-8 shadow-2xl rounded-xl lg:p-12 mx-auto">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl text-center font-bold text-cyan-500">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                </div>
                <form onSubmit={handleAddReview} className="flex flex-col w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name Here" className="input input-bordered" defaultValue={user?.displayName} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Give Me a rating between 1-5</span>
                        </label>
                        <input name='ratings' type="number" placeholder="Give me a ratings between 1-5" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label mx-auto">
                            <span className="label-text">Your Opinion Here</span>
                        </label>
                        <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Your Opinion Here" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-info text-white py-4 my-8 font-bold rounded-md">Leave feedback</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;