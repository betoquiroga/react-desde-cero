import React, { Component } from "react";
import CoursesContext from "./CoursesContext";
import Axios from "axios";

class CoursesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    Axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos')
    .then(resp => this.setState({
      courses: resp.data
    }))
  }

  render() {
    return (
      <CoursesContext.Provider value={this.state} >
        { this.props.children }
      </CoursesContext.Provider>
    )
  }
}

export default CoursesProvider;
