import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
            {id: 1, value:0},
            {id: 2, value:5},
            {id: 3, value:0},
            {id: 4, value:0},
        ]
    } ;

    // handleDelete = (counterId) => {
    //     console.log('Evnet handler Called', counterId);
    // }

    handleDelete = (counterId)  => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    }

    render() { 
        return (
        <div>
            {/* Hardcodeo */}
            {/* <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter> */}
            {this.state.counters.map(counter => 
            <Counter key= {counter.id} onDelete = {this.handleDelete} value= {counter.value} selected={true}>
                <h4>Counter #{counter.id}</h4>
            </Counter>)}
        </div>);
    }
}
//  selected sin nada mas es lo mismo que decir selected = {true}
export default Counters;