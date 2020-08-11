import React, { Component } from 'react';
import '../styles/phoneItem.css';

class PhoneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            information: {
                "category": "iPhone",
                "price": "￥5999",
                "name": "iPhone11"
            }
        }
    }
    render() {
        return (
            <div className="phoneItem">
                <h4>{this.state.information.name}</h4>
                <img src="../assets/product_image_placeholder.png"/>
                <div className="phoneItemFooter">
                    <span>{this.state.information.price}</span>
                    <button>add to cart</button>
                </div>
            </div>
        );
    }
}

export default PhoneItem;
