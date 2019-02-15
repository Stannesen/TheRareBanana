import React, { Component } from 'react';
import "../css/header.scss";


class header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo__img" src={'/img/logoTest4.png'} alt="Can't find img"></img>
                </div>

                <div>
                    Hey
                </div>
            </div>
        );
    }
}

export default header;