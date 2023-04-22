import '../../Styles/Membership/Membership.css'
import image from '../../images/Membership/stPackage.png'

const StandardDetails_user = ({ standard, highlightedPackage }) => {
    const isHighlighted = highlightedPackage?.stPackageName === standard.stPackageName

    return (
        <div 
            className={`package ${isHighlighted ? "highlighted" : ""}`}
            style={{
                width: '400px', 
                height: '400px', 
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1)',
                margin: '20px',
                textAlign: 'center',
                padding: '10px',
                borderRadius: '20px'
            }}
        >
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