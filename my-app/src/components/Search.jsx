import React, { Component } from 'react'

export default class Search extends Component {
    state ={
        currentSearch: ''
    }

    handleOnChange = (e) => {
        this.setState({
            currentSearch: e.target.value.toLowerCase()
        })
    }

    render() {
        return (
            <div className="search-section">
                <h2 className="search-header">What bier do you prefer?</h2>
                <div className="search-area">
                <input type="text" placeholder="Country or sort..." className="search-field" onChange={this.handleOnChange}/>
                <button className="search-btn" onClick={this.search}>Search</button>
                </div>

            </div>
        )
    }
}



