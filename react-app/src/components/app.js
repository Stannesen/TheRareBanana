import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/global.css';

import Header from '../components/header.js';
import Game from '../components/game/game.js';
import Home from '../components/home.js';

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/game/" component={Game} />
        </div>
    </Router>
);

class app extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <AppRouter></AppRouter>
            </div>
            
        );
    }
}

export default app;