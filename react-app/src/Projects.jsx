import React, { Component } from "react";
import axios from "axios";
import Project from "./Project";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects/")
      .then(res => {
        this.setState(() => ({ projects: res.data }));
        console.log(this.state.projects);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.projects);
    return (
      <div>
        <h1> Projects here</h1>
        {this.state.projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    );
  }
}

export default Projects;
