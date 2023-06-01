import { React, useEffect, useState } from 'react'
import { fetchFromApi } from '../src/Services/api.js'
import { Link } from 'react-router-dom';

const ShowList = ({ selectedShow }) => {
    const [shows, setShows] = useState([]);

    const handleShow = (show) => {
        selectedShow(show)
    }

    useEffect(() => {
        const fetchShowData = async () => {
            const data = await fetchFromApi();
            setShows(data);
        };
        fetchShowData();
    }, []);

    return (
        <div>
            <h1>Show List</h1>
            {shows.map((show) => (
                <div key={show.show.id}>
                    <h3>{show.show.name}</h3>
                    {/* Display additional show details here */}
                    <Link to={`/show/${show.show.id}`}>View Summary</Link>
                </div>
            ))}
        </div>

    )
}

export default ShowList