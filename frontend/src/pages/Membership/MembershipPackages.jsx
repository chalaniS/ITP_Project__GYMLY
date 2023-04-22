import React, { useState, useEffect } from "react"
import '../../App.css'
import '../../Styles/Membership/Membership.css'
import { Container } from 'reactstrap'
import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai"
import StandardDetails_user from "../../Components/Membership/StandardDetails_user"
import PromoDetails_user from "../../Components/Membership/PromoDetails_user"
import PromoGraph from "../../Components/Membership/PromoGraph"
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const MembershipPackages = () => {
    const [standards, setStandards] = useState(null)
    const [promos, setPromos] = useState(null)

    const [promoSeries, setPromoSeries] = useState([])
    const [promoLabels, setPromoLabels] = useState([])

    const [searchTerm, setSearchTerm] = useState("")
    const [highlightedPackage, setHighlightedPackage] = useState(null)
    // const [displayType, setDisplayType] = useState("standard")

    useEffect(() => {
        const fetchStandards = async () => {
            const response = await fetch('/api/stPackages')
            const json = await response.json()

            if (response.ok) {
                setStandards(json)
            }
        }

        fetchStandards()
    }, [])

    useEffect(() => {
        const fetchPromos = async () => {
            const response = await fetch('/api/prPackages')
            const json = await response.json()

            if (response.ok) {
                setPromos(json)

                // Update the promoSeries and promoLabels state variables based on the fetched data
                const newSeries = json.map((promo) => Number(promo.prPackagePrice))
                const newLabels = json.map((promo) => promo.prPackageName)
                setPromoSeries(newSeries)
                setPromoLabels(newLabels)
            }
        }

        fetchPromos()
    }, [])

    const handleDownload = () => {
        // Initialize a new jsPDF instance
        const doc = new jsPDF()

        // Add the current date to the PDF
        // const date = new Date().toLocaleDateString()
        // doc.text(`Date: ${date}`, 10, 10)

        // Add the current date to the PDF with a smaller font size and right alignment
        const date = new Date().toLocaleDateString()
        const fontSize = 10; // Set the desired font size
        const dateWidth = doc.getTextWidth(date); // Get the width of the date string
        const pageWidth = doc.internal.pageSize.width; // Get the width of the page
        doc.setFontSize(fontSize).text(`Date: ${date}`, pageWidth - dateWidth - 10, 10);

      
        // Add standard packages table to the PDF
        doc.setFontSize(16).text('Standard Packages', 10, 20)
        doc.autoTable({
            startY: 30,
            head: [['Package Name', 'Package Description', 'Package Price']],
            body: standards.map((standard) => [
            standard.stPackageName,
            standard.stPackageDescription,
            standard.stPackagePrice
            ])
        })
      
        // Add promo packages table to the PDF
        doc.setFontSize(16).text('Promo Packages', 10, doc.autoTable.previous.finalY + 10)
        doc.autoTable({
          startY: doc.autoTable.previous.finalY + 20,
          head: [['Package Name', 'Package Description', 'Package Price', 'Package Expiry Date']],
          body: promos.map((promo) => [
            promo.prPackageName,
            promo.prPackageDescription,
            promo.prPackagePrice,
            promo.prPackageValidity
          ])
        })
      
        // Save the PDF as a file with the name 'Membership-Packages.pdf'
        doc.save('Membership-Packages.pdf')
    }
      
    return (
        <section>
            <Container>
                <div className="search-download">
                    {/* <div>
                        <button onClick={() => setDisplayType(displayType === "standard" ? "promo" : "standard")}>
                            {displayType === "standard" ? "View Promo Packages" : "View Standard Packages"}
                        </button>
                    </div> */}
                    <div>
                        <button className="report-download" onClick={handleDownload}>
                            <AiOutlineDownload className="i" />
                        </button>
                    </div>
                    <div>
                        <AiOutlineSearch className="i" style={{marginRight: '10px'}}/>
                        <input type="text" className='search' 
                            style={{ width: '250px', height: '35px' }} 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  const packageToHighlight =
                                    standards.find((standard) =>
                                      standard.stPackageName
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                    ) ||
                                    promos.find((promo) =>
                                      promo.prPackageName.toLowerCase().includes(searchTerm.toLowerCase())
                                    );
                                  setHighlightedPackage(packageToHighlight);
                                }
                            }}
                        />
                    </div>
                </div>
                {/* {displayType === "standard" ? ( */}
                <div>
                    <div className="title code">Standard Packages</div>
                    
                    <div class="std-container">
                        {standards && standards
                            .filter((standard) =>
                                standard.stPackageName.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((standard) => (
                                <StandardDetails_user 
                                    key={standard._id} 
                                    standard={standard} 
                                    highlightedPackage={highlightedPackage}
                                />
                            ))
                        }
                    </div>
                </div>
                {/* ) : ( */}
                <div>
                    <div className="title code">Promo Packages</div>
              
                    <div className="promo-container">
                        {/* left side - packages */}
                        <div className="promo-left">
                            {promos && promos
                                .filter((promo) =>
                                    promo.prPackageName.toLowerCase().includes(searchTerm.toLowerCase())
                                ) 
                                .map((promo) => (
                                    <PromoDetails_user 
                                        key={promo._id} 
                                        promo={promo}
                                        highlightedPackage={highlightedPackage}
                                    />
                                ))
                            }
                        </div>
                        {/* right side - graph */}
                        <div className="promo-right">
                            <div className="promo-graph">
                                <h3 className="g-title-1">Promo Package Discount Analysis</h3>
                                <h5 className="g-title-2">Discount comparing of Promo Packages</h5>
                                <br/>
                                <PromoGraph series={promoSeries} labels={promoLabels} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
            </Container>
        </section>
    )
}

export default MembershipPackages
