import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const AddService = () => {

    const { user } = useContext(AuthContext);

    // current date and time
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl md:text-5xl font-bold my-3 text-cyan-500'>Add New Service</h1>
                <p className='text-lg font-semibold text-red-600'>
                    Please fill up the form below to add a new service.
                </p>
            </div>
            <form className='w-3/4 mx-auto'>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Service Title</span>
                        </label>
                        <input name='title' type="text" placeholder="Your Service Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input name='image' type="text" placeholder="Your Image Url Here" className="input input-bordered" required />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Your email" defaultValue={user?.email} className="input input-ghost  input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Current Time</span>
                        </label>
                        <input name="time" type="text" placeholder="Your Current Time" defaultValue={dateTime} className="input input-ghost  input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <input name="price" type="number" placeholder="Your Service Price $" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Current Users  (Give a default number value)</span>
                        </label>
                        <input name="users" type="number" placeholder="Your Current Users" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Service Ratings</span>
                        </label>
                        <input name="ratings" type="number" placeholder="Your Service Ratings" defaultValue="" className="input input-ghost  input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comments  (If You Have Any)</span>
                        </label>
                        <input name="comments" type="text" placeholder="Your Comments (You can leave this empty if you want)" defaultValue="" className="input input-ghost  input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Service Details</span>
                    </label>
                    <textarea name="details" className="textarea textarea-bordered h-24 w-full" placeholder="Your Service Details" required></textarea>
                </div>
                <div className='text-center my-10'>
                    <input className='btn btn-info px-10' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;