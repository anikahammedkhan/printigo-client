import React from 'react';

const MySingleReview = ({ review }) => {
    const { date, details, ratings, title } = review;
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
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </tbody>
    );
};

export default MySingleReview;