import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        pass: this.props.passInitial || 1,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.pass,
        });
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.pass,
        });
    }

    setPass = (event) => {
        this.setState({
            pass: +event.target.value,
        });
    }

    render() {
        return (
             <div>
                <h2>Counter</h2>
                <p>{this.state.number}</p>
                <div>
                    <label htmlFor="passInput">Pass: </label>
                    <input 
                        id="passInput" 
                        type="number" 
                        value={this.state.pass}
                        onChange={this.setPass} 
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
             </div>
        );
    }
}