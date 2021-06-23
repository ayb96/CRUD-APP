import React, {Component} from 'react'
class CrudValue extends Component {
  
    render(){
        return (
            <React.Fragment>
                
                   <span>{this.props.details.name}</span>
                   <button onClick = {() =>{ this.props.handelClick(this.props.index)}}>Delete</button>
                
            </React.Fragment>
          );
    }
}

export default CrudValue;