import React, {Component} from 'react'
class CrudValue extends Component {
    state = {
        isEdit : false
    }
    renderCourse = () => {
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => { this.toggleState()}}>Edit Course</button>
                <button onClick = {() =>{ this.props.handelClick(this.props.index)}}>Delete</button>
            </li>
        )

    }

    //toggleState
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({isEdit:!isEdit})
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        {this.props.editCourse(this.props.index, this.input.value)}
        this.toggleState();

    }

    //render update

    renderUpdateForm = () => {
        return(
          <form onSubmit = {this.updateCourseItem}>
            <input type="text" defaultValue={this.props.details.name} ref = {(v) => {this.input = v}}/>
            <button>Edit Change</button>
          </form>
        )
    }
  
    render(){
        let {isEdit} = this.state;
        return (
            <React.Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </React.Fragment>
          );
    }
}

export default CrudValue;