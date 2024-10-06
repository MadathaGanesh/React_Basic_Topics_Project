// Here this is best method when there are more number of fields in form .
// In this case , we have use setform and then declare all objects with empty values at single useState().
// Then use arrow functions , and a single parameter to store the previous form data value .
// Then use (...) spread operator to copy the values of previous form .
// events.target.value => This is used to see / get the target value (or) the value entered by the user manually .

import React, { useState } from "react";
import "./DummyFormSubscription..css";

// Using Props to get data from one component to another component .
const BestFormSubscription = (props) => {
  // Here in single useState() method we have to declare all form fields setfunctionname with empty field values .
  const [form, setform] = useState({
    UserTitle: "Enter Subscription details",
    UserDate: "",
    UserAmount: "Enter Amount",
  });
  const [isValid, setisValid] = useState(true);

  const TitleChangeHandler = (events) => {
    if (events.target.value.trim().length > 0) {
      setisValid(true);
    }
    // Here we will use arrow functions with a "previousState" parameter which is used to store the previous form data and then it will send to next form for update .
    setform((PreviousState) => {
      return { ...PreviousState, UserTitle: events.target.value };
    });

    console.log(form);
  };
  const DateChangeHandler = (events) => {
    setform((PreviousState) => {
      return { ...PreviousState, UserDate: events.target.value }; // Here using spread operator (...) to get/append a copy of previous form data
    });
    console.log(form);
  };

  const AmountChangeHandler = (events) => {
    setform((PreviousState) => {
      return { ...PreviousState, UserAmount: events.target.value };
    });
    console.log(form);
  };

  // When we click on submit button, then the data entered in form should reflect on screen or console .
  const FormSubmitHandler = (events) => {
    //using preventDefault() function , we can get the original form data without changes .
    events.preventDefault();

    if (events.target.value.trim().length === 0) {
      setisValid(false);
      return;
    }
    // Creating an object named "SubscriptionObject" to store the user data entered by user through form .
    const SubscriptionObject = {
      Title: form.UserTitle,
      Amount: form.UserAmount,
      Date: form.UserDate,
    };
    // Calling the onSave() function from "NewSubscription.js" with the help of props to send data from NewSubscription{date} value to this form .
    // And passing "SubscriptionObject" as parameter to send the user entered form values to it .
    //Then send send these form values to "App.js".
    props.onSave(SubscriptionObject);
    props.HideFormHandler();
    console.log(`Onsubmit() executed :`, SubscriptionObject);
  };
  return (
    //Onsubmit() event executes when we submit the form .
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div className="Form_Subscription_Main ">
          <div
            className={`Form_Subscription_control ${!isValid ? "isValid" : ""}`}
          >
            <label>Title :</label>
            <input
              type="text"
              value={form.UserTitle}
              onChange={TitleChangeHandler}
            ></input>
          </div>
          <div className="Form_Subscription_control">
            <label>Date : </label>
            <input
              type="date"
              value={form.UserDate}
              onChange={DateChangeHandler}
            ></input>
          </div>
          <div className="Form_Subscription_control">
            <label>Amount : </label>
            <input
              type="text"
              value={form.UserAmount}
              min={10}
              onChange={AmountChangeHandler}
            ></input>
          </div>
          <div className="Form_Subscription_Controls">
            <button type="submit" onClick={props.HideFormHandler}>
              {" "}
              Add Subscription
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BestFormSubscription;
