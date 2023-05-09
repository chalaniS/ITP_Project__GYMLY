import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import { Container,Row, Col } from 'reactstrap'
import { AiOutlineSearch } from "react-icons/ai"
import PromoDetails from "../../Components/Membership/PromoDetails"

const PromoPackages = () => {
    const [promos, setPromos] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPromos = async () => {
            const response = await fetch('/api/prPackages')
            const json = await response.json()

            if (response.ok) {
                setPromos(json)
            }
        }

        fetchPromos()
    }, [])

    const handleAddNewPromo = () => {
        navigate('/newpromo')
    }

    return (
        <section>
            <Container>
                <div className="title code">Promo Packages</div>
                <br />
                <div className="promo-add-search">
                    <div>
                        <button class="add-prm-btn" onClick={handleAddNewPromo}>Add New Promo Package</button>
                    </div>
                </div>
            
                <div class="prm-container">
                    {promos && promos.map((promo) => (
                        <PromoDetails key={promo._id} promo={promo} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default PromoPackages