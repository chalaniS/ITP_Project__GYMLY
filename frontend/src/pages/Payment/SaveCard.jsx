import React from 'react'
import{container, row, col} from 'reactstrap'
import '../../Styles/Payment/Savecard.css'
import '../../App.css'

const SaveCard = () => {
    return (
        <body>
             <section>
                <container>
                    <div className="form">
                        <div className="title code">Save the Card </div>

               <div class="container">
                <form action="">
                    <div class="row">
                        <div className="col">
                            <h3 class="title">Personal Details</h3>

                            <div class="input Box">
                                <span>User ID :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>User Name :</span>
                                <input type="Email" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>Tell No :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>Email :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>Address :</span>
                                <input type="text" placeholder=""></input>
                            </div>

                            <div class="input Box">
                                <span>Zip Code :</span>
                                <input type="text" placeholder=""></input>
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
                    <br/>
                    <div id="countdown-clock">
                    <span id="minutes"></span> : <span id="seconds"></span>
                    </div>
                    <div class="row">
                        <col lg='10' className='Print'>
                        <button type='Upload' className='secondary__btn '>Upload</button>
                        </col>
                        <col>
                        <button type='Print' className='primary__btn submit'>Print</button>
                        </col>
                        <col>
                        <button type='Delete' className='primary__btn submit'>Delete</button>
                        </col>
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