import React, { useEffect, useState } from "react";
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import { Container } from 'reactstrap'
import StandardDetails from '../../Components/Membership/StandardDetails'

const StandardPackages = () => {
    const [standards, setStandards] = useState(null)

    useEffect(() => {
        const fetchStandards = async () => {
            const response = await fetch('/api/stPackages')
            const json = await response.json()

            if (response.ok) {
                setStandards(json)
            }
        }

        fetchStandards()
    }, []) // [] means only fire once

    return (
        <section>
            <Container>
                <div className="title code">Standard Packages</div>
                <br />
                <div class="std-container">
                    {standards && standards.map((standard) => (
                        <StandardDetails key={standard._id} standard={standard} />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default StandardPackages