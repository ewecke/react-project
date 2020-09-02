import React from 'react'

export default function NotFound() {
    return (
        <div className="notFound">
            <h1>Page not found</h1>
            <p>We're Sorry the page you resquest could not be found.</p>
            <p>Please go back to the homepage or contact us at support@bestbeers.com </p>
            <img src="https://us.123rf.com/450wm/kongvector/kongvector2005/kongvector200513205/147673751-gloomy-face-of-glass-of-beer-cartoon-character-with-404-boards.jpg?ver=6" alt="page not found"/>
            <br/><br/>
            <div>{/* <Link className="btn" to="../">Go to HomePage</Link> */}</div>
            
        </div>
    )
}

