import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/global.scss';

import Header from '../components/header.js';
import TicTacToe from './Tic-tac-toe.js';
import Home from '../components/home.js';
import Footer from '../components/footer.js';

const AppRouter = () => (
    <Router>
        <div className="main">
            <Route path="/" exact component={Home} />
            <Route path="/tic-tac-toe/" component={TicTacToe} />
        </div>
    </Router>
);

class app extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="background">
                    <AppRouter></AppRouter>
                </div>

                <Footer></Footer>
            </div>
            
        );
    }
}

export default app;