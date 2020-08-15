import React, { Component } from 'react';
import '../styles/container.css';
import PhoneBrand from "./PhoneBrand";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                {Object.keys(this.props.products).map(item => {
                    return (<PhoneBrand key={item} category={item} list={this.props.products[item]}/>)
                })}
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.products);
    }
}

export default Container;
