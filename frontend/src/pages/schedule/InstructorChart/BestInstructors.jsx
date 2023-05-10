import React, { useState } from 'react'
import BarChart from './BarChart'
import { UserData } from './Chartdata'
import { Container, Row, Col, Table } from 'reactstrap'

function BestInstructors() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.Instructor),
        datasets: [
            {
                label: "Instructors",
                data: UserData.map((data) => data.userGain),
                backgroundColor: ["#6F8FAF", "#E6E6FA", "yellow"],
                borderColor: "grey",
                borderWidth: 2
            }
        ]
    })


    return (
        <>
            <div className="barchart">
                <div className="title">Best Selected Instructor</div>
                <Container>
                    <section>
                        <div><BarChart chartData={userData} /></div>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default BestInstructors