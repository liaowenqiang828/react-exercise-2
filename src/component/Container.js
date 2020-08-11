import React, { Component } from 'react';
import '../styles/container.css';
import PhoneBrand from "./PhoneBrand";

class Container extends Component {
    render() {
        return (
            <div className="container">
                <PhoneBrand/>
                <PhoneBrand/>
            </div>
        );
    }
}

export default Container;
