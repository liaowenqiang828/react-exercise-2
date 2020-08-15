import React, { Component } from 'react';
import '../styles/header.css';
import car from "../assets/car.png";

class Header extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="header">
                <h1>Store</h1>
                <a href="www.baidu.com">
                    <img border="0" src={car} alt="cart"/>
                    <span>{this.props.count}</span>
                </a>
            </div>
        );
    }
}

export default Header;
