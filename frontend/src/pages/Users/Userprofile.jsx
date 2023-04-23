import profilepic from '../../images/profilePics/profilepic.png'
import './Style/Userprofile.css'
import * as Icons from 'react-bootstrap-icons';

const Userprofile = () => {

        return (
            <div className="container-fluid" id='userprofile-section'>

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
                <div className="container" id='userdetails-section'>
                <div className='user-inftomations-divs' id="email"><Icons.EnvelopeFill className='icons'/> :  lakinduwiduraga@icould.com</div>
                <div className='user-inftomations-divs' id="phoneNumber"><Icons.TelephoneFill className='icons'/> :  0769114371</div>
                <div className='user-inftomations-divs' id="Address"><Icons.HouseFill className='icons'/> :  123/1, Galle Road </div>
                <div className='user-inftomations-divs' id="Birthday"><Icons.CalendarFill className='icons'/> :  1999-12-12</div>
                <div className='user-inftomations-divs' id="Gender"><Icons.PeopleFill className='icons'/> :  Male</div>

                
                </div>

                <div className="container text-center">
                        <div className="col" id='btn-section'>
                            <button className="btn btn-primary" id="edit-btn" onClick={event =>  window.location.href='/setting'}  > <Icons.GearWideConnected/> Edit Profile</button>
                        </div>
                </div>

            </div>
        );
    }

export default Userprofile;