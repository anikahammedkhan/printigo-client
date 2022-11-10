import React from 'react';

const MySingleReview = ({ review, setRefresh, refresh }) => {
    console.log(review);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setRefresh(!refresh);
                    alert('Review Deleted Successfully')
                }
            })
    }
    const { date, details, ratings, title, _id } = review;
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">Date : {date}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {details}
                </td>
                <td>{ratings}</td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
            </tr>
        </tbody>
    );
};

export default MySingleReview;