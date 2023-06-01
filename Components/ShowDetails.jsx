import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { fetchFromApi } from '../src/Services/api.js'

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const showApiData = async () => {
            const data = await fetchFromApi();
            const selectedShow = data.find((show) => show.show.id === parseInt(id));
            setShow(selectedShow);
        };
        showApiData();
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Show Details</h1>
            <h2>{show.show.name}</h2>
            {/* Display show summary and other details here */}
            <p>{show.show.summary}</p>
            <Link to="/">Back to Show List</Link>
        </div>
    );
}

export default ShowDetails