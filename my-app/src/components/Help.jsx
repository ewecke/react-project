import React from 'react'
import {Link} from "react-router-dom"


export default function Help() {
    return (
        <div className="Help">

            <h1>Help</h1>

            <div className="faq">
                
                <h2>Frequently asked questions</h2>

                <h2>One</h2>
                <p>one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text  </p>
                <h2>Two</h2>
                <p>one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text  </p>
                <h2>Three</h2>
                <p>one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text  </p>
                <h2>Four</h2>
                <p>one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text one text  </p>
            </div>
        
            <div className="imghelp">
                <p>Still need help? Please contact us at support@bestbeers.com </p>
                <img src="https://pbs.twimg.com/media/EDorRQYX4AA-GKu.jpg"/>
                <br/><br/>
                <div><Link to="/">Go to HomePage</Link> </div>
            </div>

        </div>
    )
}