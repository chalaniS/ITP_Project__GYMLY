import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import axios from "axios";


function App() {

<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
    const getData = async () => {
        const response = await axios.get("http://localhost:5000/getData");
        setData(response.data)
    }

    useEffect(() => {
        getData()

    }, []);
>>>>>>> origin/Tharani

>>>>>>> chalani_dev
    return (
        <>
            <Layout />

        </>


    );
};

export default App;