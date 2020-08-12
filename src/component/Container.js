import React, { Component } from 'react';
import '../styles/container.css';
import PhoneBrand from "./PhoneBrand";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iphone: "iPhone",
            huawei: "HUAWEI",
            products: [{
                "category": "iPhone",
                "price": "￥5999",
                "name": "iPhone11"
                },
                {
                    "category": "iPhone",
                    "price": "￥5399",
                    "name": "iPhoneXS"
                },
                {
                    "category": "iPhone",
                    "price": "￥3599",
                    "name": "iPhoneSE"
                },
                {
                    "category": "HUAWEI",
                    "price": "￥7999",
                    "name": "HUAWEI P40 Pro+"
                },
                {
                    "category": "HUAWEI",
                    "price": "￥5000",
                    "name": "HUAWEI Mate 30"
                },
                {
                    "category": "HUAWEI",
                    "price": "￥4000",
                    "name": "HUAWEI nova 7"
                }
            ]
        };
    }
    render() {
        return (
            <div className="container">
                <PhoneBrand phone={this.state.iphone} products={this.state.products.filter(product => product.category === "iPhone")}/>
                <PhoneBrand phone={this.state.huawei} products={this.state.products.filter(product => product.category === "HUAWEI")}/>
            </div>
        );
    }
}

export default Container;
