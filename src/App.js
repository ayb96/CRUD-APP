import React, {Component} from 'react'
import './App.css';
import CrudFrom from './crudFrom/crudFrom'
import CrudValue from './crudValue/crudValue'

class App extends Component {
  state = {
    courses: [
      {name:'HTML'},
      {name:'CSS'},
      {name:'JS'}
    ],
    current:''
  };
  handelChange = (e) => {
    this.setState({
      current : e.target.value
    })

};
handelSubmit = (e) => {
  e.preventDefault();
  let current = this.state.current;
  let courses = this.state.courses;
  courses.push({name: current})
  this.setState({courses, current:''})
};
handelClick = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({courses})
}

editCourse = (index, value) => {
  let courses = this.state.courses
  let course = courses[index]
  course['name'] = value;
  this.setState({courses})

}


  render(){

    const {courses} = this.state;  //give me courses from state
    
    const CourseList = courses.map( (item, index) => {return <CrudValue details = {item} key = {index} index={index}  handelClick = {this.handelClick} editCourse = {this.editCourse} />
    
})
    return (
      <div className="App">
          <h2>Add courses</h2>
          <CrudFrom handelChange={this.handelChange} handelSubmit={this.handelSubmit} current = {this.state.current}/>
          <ul>{CourseList }</ul>
          
      </div>
    );
  }
}

export default App;
