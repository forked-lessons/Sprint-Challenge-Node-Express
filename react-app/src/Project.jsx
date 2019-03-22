import React from "react";

const Project = props => {
  return (
    <div>
      {props.project.name}
      {props.project.description}
    </div>
  );
};

export default Project;
