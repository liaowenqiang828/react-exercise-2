import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Container from "./component/Container";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {},
            count: 0
        }
    }
    render() {
        return (
            <main className="app">
                <Header count={this.state.count}/>
                <Container products={this.state.products} onAddToCart={this.addToCart.bind(this)}/>
            </main>
        );
    }

    componentDidMount() {
        fetch("http://localhost:3000/products", {method: "GET"})
            .then((response) => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((rawData) => {
                const data = this.dataPreprocess(rawData);
                this.setState({
                    products: data
                })
                console.log(this.state.products);
            }).catch((error) => {
                throw new Error(error.message)
        })
    }

    dataPreprocess(rawData) {
        const data = {
            iPhone: [],
            HUAWEI: []
        };
        rawData.map(item => {
            if (item.category === "iPhone") {
                data.iPhone.push({
                    price: item.price,
                    name: item.name
                })
            } else if (item.category === "HUAWEI") {
                data.HUAWEI.push({
                    price: item.price,
                    name: item.name
                })
            }
        });

        return data;
    }

    addToCart() {
        this.setState(
            Object.assign({}, this.state, {count: this.state.count + 1,}));
    }

}

export default App;
