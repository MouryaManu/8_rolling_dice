import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps={
      values: ['one', 'two', 'three','four','five','six']
    }
   constructor(props) {
       super(props);
       this.state= {
           die1: 'one',
           die2:'one',
           rolling: false
       };
       this.roll=this.roll.bind(this);
   }
   roll() {
        const newDie1= this.props.values[Math.floor(Math.random() * this.props.values.length)];
        const newDie2= this.props.values[Math.floor(Math.random() * this.props.values.length)];

        this.setState({die1: newDie1,die2: newDie2, rolling: true});


        setTimeout(()  => {
            this.setState({rolling: false})
        }, 1000);
     
   }

   
    render() {
    
        return (
            <div className="RollDice"> 
                <Die face={this.state.die1} rolling={this.state.rolling} />
                <Die face={this.state.die2} rolling={this.state.rolling} />
                <button onClick={this.roll} disabled= {this.state.rolling}>
                  {this.state.rolling? "Rolling..." :"Roll Dice 1st time!" }
                </button>
            </div>
        )
    }
}

export default RollDice;