import React, { Component } from 'react'
import './Die.css';
class Die extends Component {
    render() {
     
    // const dice= `fas fa-dice-${rand}`;
        return (
            
                <i className={`fas fa-dice-${this.props.face} Die ${this.props.rolling? 'rolling' : ''} `}> </i>
            
        )
    }
}

export default Die;