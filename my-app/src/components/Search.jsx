import React, { Component } from 'react'


export default function Search(props) {
    return (
        <div>
            <h3>What beer are you looking for?</h3>
                <div>
                    <input type="text" placeholder="Country..." className="search-field" onChange={props.handleOnChange}/>
                    <button className="search-btn search-field" onClick={props.search}>Search</button>
                </div>
        </div>
    )
}

