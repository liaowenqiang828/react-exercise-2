import React, { Component } from 'react';
import '../styles/phoneBrand.css';
import PhoneList from "./PhoneList";
import BrandName from "./BrandName";

class PhoneBrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="phoneBrand">
                <BrandName name={this.props.phone}/>
                <PhoneList/>
            </div>
        );
    }
}

export default PhoneBrand;
