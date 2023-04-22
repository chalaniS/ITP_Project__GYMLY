import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import '../../Styles/schedule/schedule.css'
import { Container } from 'reactstrap'

const AddNewPromo = () => {
    const [prPackageId, setPromoId] = useState('')
    const [prPackageName, setPromoName] = useState('')
    const [prPackagePrice, setPromoPrice] = useState('')
    const [prPackageDescription, setPromoDetails] = useState('')
    const [prPackageValidity, setPromoValidity] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const promo = {prPackageId, prPackageName, prPackagePrice, prPackageDescription, prPackageValidity}

        const response = await fetch('/api/prPackages', {
            method: 'POST',
            body: JSON.stringify(promo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setPromoId('')
            setPromoName('')
            setPromoPrice('')
            setPromoDetails('')
            setPromoValidity('')
            setError(null)
            console.log('new promo added', json)
            alert('New promo package created successfully!')
            navigate('/promoPackages')
        }
    }

    return (
        <body>
            <section style={{'backgroundColor': 'transparent'}}>
                <Container style={{'backgroundColor': 'rgba(26, 24, 30, 0.9)', 'height': "50%", 'width': '50%', 'padding': '20px'}}>
                    <div className="title code">New Promo Packages Creation</div>
                    <br />
                    <div className="pkg_inputs">
                        <form class="add-promo" method="POST" onSubmit={handleSubmit}>
                            <div class="add-promo-row">
                                <label for="promoID" className="add-promo-label">Package ID :</label>
                                <input 
                                    type="text" 
                                    className="add-promo-input"
                                    name='id'
                                    onChange={(e) => setPromoId(e.target.value)}
                                    value={prPackageId}
                                />
                            </div>
                            <div class="add-promo-row">
                                <label for="promoName" className="add-promo-label">Package Name :</label>
                                <input 
                                    type="text"
                                    className="add-promo-input"
                                    name='name'
                                    onChange={(e) => setPromoName(e.target.value)}
                                    value={prPackageName}
                                />
                            </div>
                            <div class="add-promo-row">
                                <label for="promoDetails" className="add-promo-label">Package Details  :</label>
                                <textarea 
                                    className="add-promo-text" name="description"
                                    onChange={(e) => setPromoDetails(e.target.value)}
                                    value={prPackageDescription}
                                ></textarea>
                            </div>
                            <div class="add-promo-row">
                                <label for="promoPrice" className="add-promo-label">Package Price :</label>
                                <input 
                                    type="text" 
                                    className="add-promo-input"
                                    name='price'
                                    onChange={(e) => setPromoPrice(e.target.value)}
                                    value={prPackagePrice}
                                />
                            </div>
                            <div class="add-promo-row">
                                <label for="promoValidity" className="add-promo-label">Package Validity  :</label>
                                <input
                                    type="date" 
                                    className="add-promo-input"
                                    name="validity"
                                    selected={prPackageValidity} 
                                    onChange={(e) => setPromoValidity(e.target.value)}
                                    value={prPackageValidity}
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                            <div class="add-promo-row">
                                <div className="add-promo-btns">
                                    <div>
                                        <button type='reset' className='secondary__btn'>Cancel</button>
                                        <button type='submit' className='primary__btn submit create-btn'>Create</button>
                                    </div>
                                </div>
                                {error && <div className="error">{error}</div>}
                            </div>
                        </form>
                    </div>
                </Container>
            </section >
        </body>
    )
}

export default AddNewPromo
