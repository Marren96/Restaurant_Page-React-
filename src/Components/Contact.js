import React from 'react'

const styleContactContainer = {
    margin : 'auto',
    width : '700px'
}

const styleSocialMedia = {
    display :'flex',
    justifyContent :'space-evenly'
}

const Contact = () => {
    return (
        <div style = {styleContactContainer}>
            <div>
                <h5>Physical Address</h5>
                <p>Junction of Langata & Magadi Road, Nairobi, Kenya</p>
            </div>
            <br/><br/>
            <div>
                <h5>Postal Address</h5>
                <p>P.O.Box 23879483785475 - 00100, Nairobi, Kenya</p>
            </div>

            <br/><br/>


            <div>
                <h5>Telephone</h5>
                <p>020 69894878063 / 0704-9238485843</p>
            </div>

            <br/><br/>


            <div>
                <h5>E-Mail Address</h5>
                <p>info@lakeHub.co.ke</p>
            </div>

            <br/><br/>


            <div>
                <h5>Social Media</h5>
                <div style = {styleSocialMedia}>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                <i class="fa fa-tumblr" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;