import React, { Component } from 'react';
import '../styles/container.css';
import PhoneBrand from "./PhoneBrand";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iphone: "IPhone",
            huawei: "HUAWEI"
        };
    }
    render() {
        return (
            <div className="container">
                <PhoneBrand phone={this.state.iphone}/>
                <PhoneBrand phone={this.state.huawei}/>
            </div>
        );
    }
}

export default Container;
