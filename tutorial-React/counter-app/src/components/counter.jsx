import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:this.props.value,
        imageURL: 'https:picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    }

    product = 0
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    
    handleIncrement = product => {
        console.log('Increment Increased');
        console.log(product);
        this.setState({count: this.state.count + 1});
        //problema, this es undefined
        //solucion 1 crear un constructor y reemplazar el valor de la funcion con la funcion.bind
        //solucion 2 usar arrow function
    };

    // Para pasarse argumentos de eventos se puede crear otra funcion o poner la arrow funcion dentro de la funcion que la llama
    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1})
    // }

    render() { 
        console.log("props", this.props);
        
        let classes = this.getBadgeClasses();
        return (
        <React.Fragment>
            {this.props.children}
            <h1>Hello World!</h1>
            {/* <img src={this.state.imageURL} alt="" /> */}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={() => this.handleIncrement(this.product)} 
            className='btn btn-secondary btn-sm'>Increment
            </button>
            <button 
            className='btn btn-danger btn-sm m-2'
            onClick={() => this.props.onDelete(this.props.id)}>
                Delete
            </button>
            <ul>
                {this.state.tags.map (tag => <li key={tag}>{tag}</li>) }
            </ul>
        </React.Fragment>);
        //solo puede interpretar un tag por eso se los envuelve en div o si quieres que no haya div con react.fragment
    }
    // badge y btn son de bootrap 
    // se puede hacer styles normales como styles y hacer css a lo normal
    //intentar mantener limpio el metodo de render

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        // return count === 0 ? <h1>Zero</h1> : count;

        return count === 0 ? "Zero" : count;
        //if count equals 0 then return "Zero" : otherwise count
        // === ----> if equals
        //? ------> return
        //: ----> otherwise
    }
}
 
export default Counter;