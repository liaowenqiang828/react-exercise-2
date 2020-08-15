import React, { Component } from 'react';
import '../styles/phoneItem.css';
import phonePlaceHolder from "../assets/product_image_placeholder.png";

class PhoneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="phoneItem">
                <h4>{this.props.information.name}</h4>
                <img src={phonePlaceHolder} alt="哎呀，图挂了"/>
                <div className="phoneItemFooter">
                    <span>{this.props.information.price}</span>
                    <button>add to cart</button>
                </div>
            </div>

        );
    }
}

export default PhoneItem;
