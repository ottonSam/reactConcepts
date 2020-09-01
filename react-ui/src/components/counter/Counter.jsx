import React, { Component } from 'react';

import Display from './Display';
import Buttons from './Buttons';
import PassForm from './PassForm';

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

    setPass = (newPass) => {
        this.setState({
            pass: newPass,
        });
    }

    render() {
        return (
             <div>
                <h2>Counter</h2>
                <Display number={this.state.number}></Display>
                <PassForm pass={this.state.pass} setPass={this.setPass}></PassForm>
                <Buttons increment={this.inc} decrement={this.dec}></Buttons>
             </div>
        );
    }
}