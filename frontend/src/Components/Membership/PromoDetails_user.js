import '../../Styles/Membership/Membership.css'
import image from '../../images/Membership/prmPackage.png'

const PromoDetails_user = ({ promo, highlightedPackage }) => {
    const isHighlighted = highlightedPackage?.prPackageName === promo.prPackageName

    return (
        <div 
            className={`package ${isHighlighted ? "highlighted" : ""}`}
            style={{
                width: '280px',
                height: '350px',
                padding: '10px',
                borderRadius: '20px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1)',
                margin: '20px',
                textAlign: 'center'
            }}
        >
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