import React, { Component } from 'react';
class conditionalRendering
 extends Component {
    state = { 
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
     };

     //Primer escenario
     renderTags(){
        if (this.state.tags.length === 0 ) return <p>No hay tags</p>
         //se puede retornar jsx o lo que sea y si no quieres que devuelva nada null
        return <ul>{this.state.tags.map(tag => <li key ={tag}> {tag}</li>)}</ul>
     }

    render() { 
        return (
            <div>
                {/* escenario 2, un if sin else */}
                { this.state.tags.length ===0 && "Porfavor crear nuevo tag"}
               {this.renderTags} 
            </div>
        );
    }
}
 
export default conditionalRendering
;