import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const UpdateReview = () => {
    const reviewData = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();


    const { _id, name, details, email, image, ratings, title } = reviewData;
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();

    let dateTime = time + ' ' + date;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const newRatings = form.ratings.value;
        const newDetails = form.details.value;
        const updatedReview = {
            name,
            email,
            date: dateTime,
            ratings: newRatings,
            details: newDetails,
            image,
            title
        }

        const proceed = window.confirm('Are you sure, you want to Update this review?');

        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedReview)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {

                        alert('Review Updated Successfully');
                        navigate('/my-reviews', { state: { from: location } });
                    }
                })
        }
    }

    return (
        <div className="flex flex-col max-w-xl p-8 shadow-2xl rounded-xl lg:p-12 mx-auto my-10">
            <HelmetProvider>
                <Helmet>
                    <title>Update Review</title>
                </Helmet>
            </HelmetProvider>
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl text-center font-bold text-cyan-500">Update Review for : {title}</h2>
                <form onSubmit={handleUpdate} className="flex flex-col w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name Here" className="input input-bordered" defaultValue={name} readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Give Me a rating between 1-5</span>
                        </label>
                        <input name='ratings' type="number" placeholder="Give me a ratings between 1-5" className="input input-bordered" defaultValue={parseInt(ratings)} required />
                    </div>
                    <div className="form-control">
                        <label className="label mx-auto">
                            <span className="label-text">Your Opinion Here</span>
                        </label>
                        <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Your Opinion Here" defaultValue={details} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-error text-white py-4 my-8 font-bold rounded-md">Apply Changes</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;