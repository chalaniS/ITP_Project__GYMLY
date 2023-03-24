import React from 'react'

const SaveCard = () => {
    return (
        <body>
            <div class="container">
                <form action="">
                    <div class="row">
                        <div className="col">
                            <h3 class="title">billing address</h3>

                            <div class="input Box">
                                <span>Full name :</span>
                                <input type="text" placeholder="">
                                </input>
                            </div>
                            <div class="input Box">
                                <span>Email :</span>
                                <input type="Email" placeholder="">
                                </input>
                            </div>
                            <div class="input Box">
                                <span>Address :</span>
                                <input type="text" placeholder="">
                                </input>
                            </div>
                            <div class="input Box">
                                <span>City :</span>
                                <input type="text" placeholder="">
                                </input>
                            </div>
                            <div class="flex">
                                <div class="input Box">
                                    <span>State :</span>
                                    <input type="text" placeholder="">
                                    </input>
                                </div>
                                <div class="input Box">
                                    <span>Zip code :</span>
                                    <input type="text" placeholder="">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )


}

export default SaveCard