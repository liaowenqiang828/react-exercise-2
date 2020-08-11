import React, { Component } from 'react';
import '../styles/brandName.css';

class BrandName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <h3 className="brandName">{this.props.name}</h3>
    }
}
export default BrandName;
