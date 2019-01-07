import React, { Component } from 'react';


class footer extends Component {
    render(){
        return(
            <div className="footer">
                <h1 class="footer__logo">The Rare Banana Copyright © 2018. All rights reserved.</h1>
                <div class="links">
                    <div class="links__types">
                        <p class="links__header">Links:</p>
                        <ul class="footer__ul">
                            <li class="footer__list">
                                <a class="footer__link" href="/about">About</a>
                            </li>
                        </ul> 
                    </div>   

                    <div class="links__types">
                        <p class="links__header" >Converters:</p>
                        <ul class="footer__ul">
                            <li class="footer__list">
                                <a class="footer__link" href="/converter">Time Converter</a>
                            </li>

                            <li class="footer__list">
                                <a class="footer__link" href="/ converter">Length Converter</a>
                            </li>
                        </ul>
                    </div>

                    <div class="links__types">
                        <p class="links__header">Remakes</p>
                        <ul class="footer__ul">
                            <li class="footer__list">
                                <a class="footer__link" href="/">Vue</a>
                            </li>

                            <li class="footer__list">
                                <a class="footer__link" href="https://www.therarebanana.net/">React</a>
                            </li>
                            
                            <li class="footer__list">
                                <a class="footer__link" href="/basic/">HTML</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;