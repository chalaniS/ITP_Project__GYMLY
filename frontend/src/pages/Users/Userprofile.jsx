import profilepic from '../../images/profilePics/profilepic.png'
import './Style/Userprofile.css'

const Userprofile = () => {

        return (
            <div className="container-fluid">

                {/* Row for Profile Pic and name */}
                <div className="container" id="Profile-Name-Pic-section">
                    <div className="container text-center" id="Pic-Section">
                        <img src={profilepic} alt="Profile Pic" className='img-fluid' id="Profile-Pic" />
                    </div>
                    <div className="text-center" id='name-title'>
                        <div>
                            Lakindu Widuranga Alwis
                        </div>
                    </div>
                </div>

                {/*User details section*/}
                <div className="text-center container" id='userdetails-section'>
                <div className='user-inftomations-divs' id="email">lakinduwiduraga@icould.com</div>
                    <div className='user-inftomations-divs' id="phoneNumber">Male</div>

                    <div className='user-inftomations-divs' id="phoneNumber">0769114371</div>
                </div>

                <div className="container text-center">
                        <div className="col" id='btn-section'>
                            <button className="btn btn-primary" id="edit-btn">Edit Profile</button>
                        </div>
                </div>

            </div>
        );
    }

export default Userprofile;