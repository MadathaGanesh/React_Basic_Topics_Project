import React from "react";
import Subscription from "./Subscription";

const SubscriptionFilter = (props) => {
  if (props.SubscriptionData.length === 0) {
    return <h2>No Data Found Here</h2>;
  } else {
    return (
      <div>
        {props.SubscriptionData.map((subscriptionParameter) => (
          <Subscription
            key={subscriptionParameter.id}
            date={subscriptionParameter.date}
            title={subscriptionParameter.title}
            PassedAmount={subscriptionParameter.amount}
          />
        ))}
      </div>
    );
  }
};

export default SubscriptionFilter;
