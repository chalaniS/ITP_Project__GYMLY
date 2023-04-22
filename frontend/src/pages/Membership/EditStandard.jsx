import React, { useState, useEffect } from "react"
import { useLocation, useParams } from 'react-router-dom'
import axios, { Axios } from 'axios'
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import '../../Styles/schedule/schedule.css'
import { Container } from 'reactstrap'
import image from '../../images/Membership/image7.jpg'

const EditStandard = () => {
    const { id } = useParams();
    const [stPackageId, setStPackageId] = useState("")
    const [stPackageName, setStPackageName] = useState("")
    const [stPackageDescription, setStPackageDescription] = useState("")
    const [stPackagePrice, setStPackagePrice] = useState("")

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axios.get(`/api/stPackages/${id}`);
                setStPackageId(response.data.stPackageId);
                setStPackageName(response.data.stPackageName);
                setStPackageDescription(response.data.stPackageDescription);
                setStPackagePrice(response.data.stPackagePrice);
            } catch (error) {
                console.log('Error fetching package: ', error);
            }
        };
        fetchPackage();
    }, [id]);

    const handleSaveClick = (e) => {
        e.preventDefault()
    
        axios.patch(`/api/stPackages/${id}`, {
            stPackageName: stPackageName,
            stPackagePrice: stPackagePrice,
            stPackageDescription: stPackageDescription
        })
            .then(response => {
                console.log(response.data);
                // handle success
                window.alert('Data has been updated successfully');
                console.log('Successfully updated the Standard Package');
                window.location = "http://localhost:3000/standardpackages";
            })
            .catch(error => {
                console.log(error);
                // handle error
                console.log("error when update the data");
                window.alert('Data is not updated');
                window.location.reload();
            });
    };

    return (
        <body>
            <section >
                <Container>
                    <div className="title code">Edit Standard Package</div>
                    <br />
                    <div className="pkg_inputs">
                        <form class="add-promo" method="POST" onSubmit={handleSaveClick}>
                            <div className="add-promo-row">
                                <img src={image} alt="" className='edit-std-img' />
                            </div>
                            <div class="add-promo-row">
                                <label htmlFor="stID" className="add-promo-label">Package ID :</label>
                                <input 
                                    type="text" 
                                    className="add-promo-input"
                                    value={stPackageId} 
                                    onChange={e => setStPackageId(e.target.value)}
                                />
                            </div>
                            <div class="add-promo-row">
                                <label htmlFor="stName" className="add-promo-label">Package Name :</label>
                                <input 
                                    type="text"
                                    className="add-promo-input"
                                    value={stPackageName} 
                                    onChange={e => setStPackageName(e.target.value)}
                                />
                            </div>
                            <div class="add-promo-row">
                                <label htmlFor="stDetails" className="add-promo-label">Package Details  :</label>
                                <textarea 
                                    className="add-promo-text" 
                                    name="description"
                                    value={stPackageDescription} 
                                    onChange={e => setStPackageDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div class="add-promo-row">
                                <label htmlFor="stPrice" className="add-promo-label">Package Price :</label>
                                <input 
                                    type="text" 
                                    className="add-promo-input"
                                    value={stPackagePrice} 
                                    onChange={e => setStPackagePrice(e.target.value)}
                                />
                            </div>
                            <div class="add-promo-row">
                                <div className="add-promo-btns">
                                    <div>
                                        <button type='reset' className='secondary__btn'>Cancel</button>
                                        <button type='submit' className='primary__btn submit create-btn' >Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container >
            </section >
        </body>
    )
}

export default EditStandard
