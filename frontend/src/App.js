import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import Axios from "axios";


function App() {

    const [data, setData] = useState();

    const getData = async () => {
        const response = await Axios.get("http://localhost:5000/getData");
        setData(response.data)
    }

    useEffect(() => {
        getData()

    }, []);

    return (
        <>
            <Layout />
            <div>{data}</div>
        </>


    );
};

export default App;