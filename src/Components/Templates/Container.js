import React from "react";
import "./Container.css";

const Container = (props) => {
  return <div className="BoxContainer">{props.children}</div>;
};

export default Container;
