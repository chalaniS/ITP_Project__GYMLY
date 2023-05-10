import React from "react";
import Layout from "./Components/Layout/Layout";
<<<<<<< HEAD
import axios from "axios";
=======
import { FaBeer } from "@react-icons/all-files";
>>>>>>> origin/Sujithra


function App() {
    return <Layout />;

<<<<<<< HEAD
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
=======
>>>>>>> origin/Sujithra
};

export default App;