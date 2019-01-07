import React, { Component } from 'react';


class footer extends Component {
    render(){
        return(
            <div className="footer">
                <h1 className="footer__logo">The Rare Banana Copyright © 2018. All rights reserved.</h1>
                <div className="links">
                    <div className="links__types">
                        <p className="links__header">Links:</p>
                        <ul className="footer__ul">
                            <li className="footer__list">
                                <a className="footer__link" href="https://therarebanana.com/about">About</a>
                            </li>
                        </ul> 
                    </div>   

                    <div className="links__types">
                        <p className="links__header">Games:</p>
                        <ul className="footer__ul">
                            <li className="footer__list">
                                <a className="footer__link" href="/tic-tac-toe">Tic Tac Toe</a>
                            </li>
                        </ul>
                    </div>

                    <div className="links__types">
                        <p className="links__header">Remakes</p>
                        <ul className="footer__ul">
                            <li className="footer__list">
                                <a className="footer__link" href="https://www.therarebanana.com/">Vue</a>
                            </li>

                            <li className="footer__list">
                                <a className="footer__link" href="https://www.therarebanana.net/">React</a>
                            </li>
                            
                            <li className="footer__list">
                                <a className="footer__link" href="https://www.therarebanana.com/basic/">HTML</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;