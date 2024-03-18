import React from "react";
import './abc.css'

function Abstract() {

    return (
        <section class='body'>
            <div class='container'>
                <div class='nav'>
                    <div class='logo'>
                        <h1>Logo</h1>
                        <div className="line">|</div>
                        <h3>Help Center</h3>
                    </div>
                    <div className="btn">
                        <button className="btn-submit">Submit a request</button>
                        <button className="btn-sign">Sign in</button>
                    </div>
                </div>
                <header class='search'>
                    <p class='how'>How can we help</p>
                    <input 
                    type='search'
                    class='search-box'/>
                </header>
                <div class='content'>content</div>
                <div class='footer'>footer</div>
            </div>
        </section>
    )
}

export default Abstract;