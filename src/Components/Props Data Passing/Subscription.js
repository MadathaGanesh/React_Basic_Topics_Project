import "./Subscription.css";
import Container from "../Templates/Container";
import React, { useState } from "react";
import SubscriptionDate from "./SubscriptionDate";

const Subscription = (props) => {
  // UseState Hook is used to update value and display the updated value on the screen.
  const [title, SetTitle] = useState(props.title);
  const OnChangeTitle = () => {
    SetTitle("Allu Arjun");
    console.log("Changed title is : " + title);
  };
  return (
    <div className="display">
      <SubscriptionDate date={props.date} />
      <Container> Title : {title}</Container>
      <Container>Amount : {props.PassedAmount}</Container>
      <button type="button" id="ChangeTitle" onClick={OnChangeTitle}>
        Click to change title
      </button>
    </div>
  );
};

export default Subscription;
