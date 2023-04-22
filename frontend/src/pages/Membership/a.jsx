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
      
        // Add standard packages table to the PDF
        doc.text('Standard Packages', 10, 10)
        doc.autoTable({
          startY: 20,
          head: [['Package Name', 'Package Description', 'Package Price']],
          body: standards.map((standard) => [
            standard.stPackageName,
            standard.stPackageDescription,
            standard.stPackagePrice
          ])
        })
      
        // Add promo packages table to the PDF
        doc.text('Promo Packages', 10, doc.autoTable.previous.finalY + 10)
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
                    <div>
                        <button className="report-download" onClick={handleDownload}>
                            <AiOutlineDownload className="i" />
                        </button>
                    </div>
                    <div>
                        <AiOutlineSearch className="i" style={{marginRight: '10px'}}/>
                        <input type="text" className='search' style={{ width: '250px', height: '35px' }} value="" />
                    </div>
                </div>

                <div className="title code">Standard Packages</div>
                <div class="std-container">
                    {standards && standards.map((standard) => (
                        <StandardDetails_user key={standard._id} standard={standard} />
                    ))}
                </div>

                <div className="title code">Promo Packages</div>
                <div className="promo-container">
                    {/* left side - packages */}
                    <div className="promo-left">
                        {promos && promos.map((promo) => (
                            <PromoDetails_user key={promo._id} promo={promo} />
                        ))}
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
            </Container>
        </section>
    )
}

export default MembershipPackages






import '../../Styles/Membership/Membership.css'
import image from '../../images/Membership/stPackage.png'

const StandardDetails_user = ({ standard }) => {
    return (
        <div class="std-packages">
            <br />
            <img src={image} alt="" className='std-image' /> <br /><br />
            <h2 class="std-name">{standard.stPackageName}</h2>
            <h4 class="std-id">Package ID : {standard.stPackageId}</h4>
            <p class="std-price">LKR {standard.stPackagePrice}</p>
            <p class="std-description">{standard.stPackageDescription}</p>
            <p><button class="std-edit-btn">Select</button></p>
        </div>
    )
}

export default StandardDetails_user








import '../../Styles/Membership/Membership.css'
import image from '../../images/Membership/prmPackage.png'

const PromoDetails_user = ({ promo }) => {
    return (
        <div class="promo-packages">
            <br />
            <img src={image} alt="" className='promo-image' /> <br /><br />
            <h2 class="promo-name">{promo.prPackageName}</h2>
            <h4 class="promo-id">Package ID : {promo.prPackageId}</h4>
            <p class="promo-price">LKR {promo.prPackagePrice}</p>
            <p class="promo-description">{promo.prPackageDescription}</p>
            <p class="promo-validity">Valid Until {promo.prPackageValidity}</p>
            <p><button class="promo-select-btn">Select</button></p>
        </div>
    )
}

export default PromoDetails_user