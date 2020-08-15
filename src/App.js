import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header';
import Container from "./component/Container";

function dataPreprocess(rawData) {
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        fetch("http://localhost:3000/products", {method: "GET"})
            .then((response) => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((rawData) => {
                console.log(rawData);
                const data = dataPreprocess(rawData);
                console.log(data);
                this.setState({
                    products: data
                })
            }).catch((error) => {
                throw new Error(error.message)
        })
    }

    render() {
    return (
      <main className="app">
        <Header/>
        <Container products={this.state.products}/>
      </main>
    );
  }
}

export default App;
