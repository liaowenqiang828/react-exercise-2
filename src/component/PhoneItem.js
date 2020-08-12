import React, { Component } from 'react';
import '../styles/phoneItem.css';
import phonePlaceHolder from "../assets/product_image_placeholder.png";

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
            // <div className="phoneItem">
            //     <h4>{this.props.information.name}</h4>
            //     <img src="../assets/product_image_placeholder.png"/>
            //     <div className="phoneItemFooter">
            //         <span>{this.props.information.price}</span>
            //         <button>add to cart</button>
            //     </div>
            // </div>
            <div className="phoneItem">
                <h4>{this.state.information.name}</h4>
                <img src={phonePlaceHolder} alt={this.state.information.name}/>
                <div className="phoneItemFooter">
                    <span>{this.state.information.price}</span>
                    <button>add to cart</button>
                </div>
            </div>
        );
    }
}

export default PhoneItem;
