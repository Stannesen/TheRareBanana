import React, { Component } from 'react';
import '../css/header.css';


class header extends Component {
    render() {
        return (
            <div className="header">
                <img className="logo__img" src={'/img/top-logo.png'} alt="Can't find img"></img>
                <div className="nav">
                    <ul className="nav__ul">
                        <li className="nav__li">
                            <a className="nav__link" href="/">Home</a>
                        </li>
                        <li className="nav__li">
                            <a className="nav__link" href="/game/">Game</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default header;