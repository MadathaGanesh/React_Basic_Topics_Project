import React, { useState } from "react";
import BestFormSubscription from "./BestFormSubscription";

const NewSubscription = (props) => {
  const [ShowForm, setShowForm] = useState(true);

  // Creating a event Handler and a function
  const OnSaveHandler = (data) => {
    // Here we are adding id field manually ,bocz the array has 4 elements along with id .
    // Send this "id" value to the BestFormSubscription using onSave() function .
    const SubscriptionData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddSubscription(SubscriptionData);
    console.log(
      `OnSave Handler executed to check whether id is added (1):`,
      SubscriptionData
    );
  };

  const ShowFormHandler = () => {
    setShowForm(true);
    console.log("Setshowform :", ShowForm);
  };

  const HideFormHandler = () => {
    setShowForm(false);
    console.log("SetshowForm", setShowForm);
  };
  return (
    <div className="New_Subscription">
      {ShowForm && (
        <BestFormSubscription
          onCancel={HideFormHandler}
          onSave={OnSaveHandler}
        />
      )}
      <button onClick={HideFormHandler}>Hide</button>
      <button onClick={ShowFormHandler}>Show</button>
    </div>
  );
};

export default NewSubscription;
