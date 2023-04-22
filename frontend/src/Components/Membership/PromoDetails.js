import '../../Styles/Membership/Membership.css'
import image from '../../images/Membership/prmPackage.png'

const PromoDetails = ({ promo }) => {

    const handleDeleteClick = async () => {
        const response = await fetch('/api/prPackages/' + promo._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        // Refresh the page
        window.location.reload();
    }

    return (
        <div class="prm-packages">
            <br />
            <img src={image} alt="" className='prm-image' /> <br /><br />
            <h2 class="prm-name">{promo.prPackageName}</h2>
            <h4 class="prm-id">Package ID : {promo.prPackageId}</h4>
            <p class="prm-price">LKR {promo.prPackagePrice}</p>
            <p class="prm-description">{promo.prPackageDescription}</p>
            <p class="prm-validity">Valid Until {promo.prPackageValidity}</p>
            <p><button class="prm-edit-btn" onClick={handleDeleteClick}>Delete</button></p>
        </div>
    )
}

export default PromoDetails