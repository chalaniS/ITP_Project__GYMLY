import React from 'react'
import{container, row, col} from 'reactstrap'
import '../../Styles/Payment/Payment.css'
import '../../App.css'
import '../../images/Payment'


const SaveCard = () => {
    return (
        <body>
             <section >
                <container>
                    <div className="form">
                        <div className="title code">Save the </div>

            <div class="container">
                <form action="">
                    <div class="row">
                        <div className="col">
                            <h3 class="title">billing address</h3>

                            <div class="input Box">
                                <span>Full name :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>Email :</span>
                                <input type="Email" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>Address :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>City :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="flex">
                                <div class="input Box">
                                    <span>State :</span>
                                    <input type="text" placeholder=""></input>
                                </div>

                                <div class="input Box">
                                    <span>Zip code :</span>
                                    <input type="text" placeholder=""></input>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <h3 class="title">Payment</h3>

                            <div class="input Box">
                                <span>Card accepted :</span>
                                <img src="..\..\images\Payment\Img1.png" alt=""></img>
                            </div>

                            <div class="input Box">
                                <span>Name on Card :</span>
                                <input type="text" placeholder=""></input>
                            </div>
                            
                            <div class="input Box">
                                <span>Card Number :</span>
                                <input type="Number" placeholder="">
                                </input>
                            </div>

                            <div class="input Box">
                                <span>Expire month :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="flex">
                                <div class="input Box">
                                    <span>Expire year :</span>
                                    <input type="text" placeholder=""></input>
                                </div>

                                <div class="input Box">
                                    <span>CVV  :</span>
                                    <input type="text" placeholder=""></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                    <input type="Edit" value="Edit" class="Edit-btn"></input>
                    <input type="Delete" value="Delete" class="Delete-btn"></input>
                    <input type="Submit" value="Submit" class="submit-btn"></input>
                    </div>
                </form>
            </div>
            </div>
             </container >
            </section >
        </body>
    )


}

export default SaveCard