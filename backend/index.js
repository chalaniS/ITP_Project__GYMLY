import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/endpoint')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>{data ? data.message : 'Loading...'}</h1>
        </div>
    );
}

export default App;
