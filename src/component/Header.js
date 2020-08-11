import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Store</h1>
                <a href="www.baidu.com">
                    <img border="0" src="../assets/car.png"/>
                </a>
            </div>
        );
    }
}

export default Header;
