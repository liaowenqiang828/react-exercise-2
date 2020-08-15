import React, { Component } from 'react';
import '../styles/phoneList.css';
import PhoneItem from "./PhoneItem";

class PhoneList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     "products": [{
        //         "category": "iPhone",
        //         "price": "￥5999",
        //         "name": "iPhone11"
        //         },
        //         {
        //             "category": "iPhone",
        //             "price": "￥5399",
        //             "name": "iPhoneXS"
        //         },
        //         {
        //             "category": "iPhone",
        //             "price": "￥3599",
        //             "name": "iPhoneSE"
        //         },
        //         {
        //             "category": "HUAWEI",
        //             "price": "￥7999",
        //             "name": "HUAWEI P40 Pro+"
        //         },
        //         {
        //             "category": "HUAWEI",
        //             "price": "￥5000",
        //             "name": "HUAWEI Mate 30"
        //         },
        //         {
        //             "category": "HUAWEI",
        //             "price": "￥4000",
        //             "name": "HUAWEI nova 7"
        //         }
        //     ]
        // }
    }

    render() {
        return (<div className="phoneList">

            {this.props.products.map((product, index) => {
                return <PhoneItem key={index} information={product}/>
            })}
        </div>
        );
    }
}

export default PhoneList;
// <PhoneItem/>
// <PhoneItem/>
// <PhoneItem/>
