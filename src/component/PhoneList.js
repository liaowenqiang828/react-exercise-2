import React, { Component } from 'react';
import '../styles/phoneList.css';
import PhoneItem from "./PhoneItem";

class PhoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className="phoneList">
            {this.props.products.map((product, index) => {
                return <PhoneItem key={index}
                                  information={product}
                                  onAddToCart={this.props.onAddToCart}
                />
            })}
        </div>
        );
    }
}

export default PhoneList;
