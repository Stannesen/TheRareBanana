import React, { Component } from 'react';
import '../css/header.css';


class header extends Component {
    render() {
        return (
            <div className="header">
                <img className="logo__img" src={'/img/top-logo.png'} alt="Can't find img"></img>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/game/">Game</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default header;