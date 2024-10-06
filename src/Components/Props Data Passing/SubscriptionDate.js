import React from "react";
import "./Subscription.css";
import PropTypes from "prop-types";

const SubscriptionDate = (props) => {
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  const month = props.date.toLocaleString("default", { month: "long" });

  return (
    <div>
      <div className="date">
        {day} : {month} : {year}
      </div>
    </div>
  );
};
// Prop validation using PropTypes
SubscriptionDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default SubscriptionDate;
