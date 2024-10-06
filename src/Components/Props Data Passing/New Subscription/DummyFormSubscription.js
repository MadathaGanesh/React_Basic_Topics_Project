// This form is used when we have some minimum attributes in form . and second method is used when we have more attributes but it will depend on the previously updated value and sometimes the updated values may be not in a continuous order .

import React, { useState } from "react";
import "./DummyFormSubscription..css";

const DummyFormSubscription = () => {
  /*     { As it is a small form , so we are using this usestate() method and objects individually .
          When we are working with a long form with more form fields then we will use another approach .}

  const [UserTitle, setUserTitle] = useState("");
  const [UserDate, setUserDate] = useState("");   // Initial value for forms will be null or empty.
  const [UserAmount, setUserAmount] = useState("");
  */

  const [form, setform] = useState({
    UserTitle: "",
    UserDate: "",
    UserAmount: "",
  }); //when we have multiple fields in form then we have to write their objects with empty fields like this .
  const titleChangeHandler = (events) => {
    setform({ ...form, UserTitle: events.target.value });
    console.log(form);
    /*
   setUserTitle(events.target.value);      {events.target.value means it will exactly represent the data which is entered by user .}
    console.log("onTitleChange : ", events.target.value);
    */
  };
  const dateChangeHandler = (events) => {
    /*{ These below 2 lines are used for form with less attributes .}
   setUserDate(events.target.value);
   console.log("ondatechange : ", events.target.value);
   */
    setform({ ...form, UserDate: events.target.value });
    console.log(form);
  };
  const amountchangeHandler = (events) => {
    setform({ ...form, UserAmount: events.target.value });
    console.log(form);
    /*
    setUserAmount(events.target.value);
   console.log("onAmountChangeHandler", events.target.value);
   */
  };
  return (
    <form>
      <div className="Form_Subscription_Main">
        <div className="Form_Subscription_control">
          <label> Title : </label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="Form_Subscription_control">
          <label>Date : </label>
          <input type="date" onChange={dateChangeHandler}></input>
        </div>
        <div className="Form_Subscription_control">
          <label>Amount : </label>
          <input type="text" min={10} onChange={amountchangeHandler}></input>
        </div>
        <div className="Form_Subscription_Controls">
          <button type="submit"> Add Subscription</button>
        </div>
      </div>
    </form>
  );
};

export default DummyFormSubscription;
