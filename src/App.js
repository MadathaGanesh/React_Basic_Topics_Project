import "./App.css";
import React, { useState } from "react";
import NewSubscription from "./Components/Props Data Passing/New Subscription/NewSubscription";
import Filter from "./Components/Templates/Filter";
import SubscriptionFilter from "./Components/Props Data Passing/SubscriptionFilter";

const INITIAL_SUBSCRIPTION = [
  {
    id: "1",
    date: new Date("2020", "09", "09"),
    title: "Monthly Subscription ",
    amount: "293.4",
  },
  {
    id: "2",
    date: new Date("2020", "00", "10"),
    title: "Quarterly",
    amount: "546.75",
  },
  {
    id: "3",
    date: new Date("2021", "01", "01"),
    title: "Annual",
    amount: "1051.55",
  },
  {
    id: "4",
    date: new Date("2022", "02", "02"),
    title: "Weekly",
    amount: "113.6",
  },
  {
    id: "5",
    date: new Date("2023", "03", "03"),
    title: "Day",
    amount: "30.4",
  },
  {
    id: "6",
    date: new Date("2024", "04", "04"),
    title: "One Hour",
    amount: "10.54",
  },
];

function App() {
  // Below is an array to declare and store subscription details data in JSON Format
  const [SubscriptionData, setSubscriptionData] =
    useState(INITIAL_SUBSCRIPTION);
  const [FilteredYear, SetFilteredYear] = useState("2022");

  const onAddHandler = (data) => {
    // Using Push method to send form data into an array .
    INITIAL_SUBSCRIPTION.push(data);
    setSubscriptionData((prevState) => {
      return [...prevState, SubscriptionData];
    });
    console.log(`OnAddSubscription Handler :`, data);
    console.log("SUbscription Array is :", INITIAL_SUBSCRIPTION);
  };

  const FilterChangeHandler = (data) => {
    SetFilteredYear(data);
    console.log("app.js : onFilterChange =>", data);
  };

  const FilterSubscriptions = SubscriptionData.filter((item) => {
    return item.date.getFullYear().toString() === FilteredYear;
  });

  // Here we are creating variable to keep the code and check whether there is any content in that year or not .
  // let content = <h2>NO Data Found</h2>;
  // if (FilterSubscriptions.length !== 0) {
  //   content = FilterSubscriptions.map((subscriptionParameter) => (
  //     <Subscription
  //       key={subscriptionParameter.id}
  //       date={subscriptionParameter.date}
  //       title={subscriptionParameter.title}
  //       PassedAmount={subscriptionParameter.amount}
  //     />
  //   ));
  // }
  return (
    // By using below way , we can directly createElement and display data using React.createElement() method .
    //React.createElement('div',{},React.createElement('h2',{},'Good N  ight'))

    <div className="App">
      <NewSubscription onAddSubscription={onAddHandler} />
      <Filter
        onFilterChange={FilterChangeHandler}
        SelectedFilter={FilteredYear}
      />

      {/* Using ternary operator we are accessing data instead of if-else statements  */}
      {/* {FilterSubscriptions.length === 0 ? (
        <h2>No Data Found</h2>
      ) : (
        FilterSubscriptions.map((subscriptionParameter) => (
          <Subscription
            key={subscriptionParameter.id}
            date={subscriptionParameter.date}
            title={subscriptionParameter.title}
            PassedAmount={subscriptionParameter.amount}
          />
        ))
      )} */}

      {/* {content} */}

      {/* <ChartDataset FilterSubscriptions={FilterSubscriptions} /> */}
      <SubscriptionFilter SubscriptionData={FilterSubscriptions} />

      {/* Instead of using ternary operator for condition checking , we can use (&&) operator , which will written in two statements , 
      one will execute if the condition is true , and the other will execute if the condition is false . */}
      {/* {FilterSubscriptions.length === 0 && <h2>No data found</h2>}
      {FilterSubscriptions.length !== 0 &&
        FilterSubscriptions.map((subscriptionParameter) => (
          <Subscription
            key={subscriptionParameter.id}
            date={subscriptionParameter.date}
            title={subscriptionParameter.title}
            PassedAmount={subscriptionParameter.amount}
          />
        ))} */}

      {/* Here in the below , we are using .map() function with "subscriptionParameter" as parameter 
        Then we are using <Subscription> tag to display the date , title and amount values >
      */}
      {/* {FilterSubscriptions.map((subscriptionParameter) => (
        <Subscription
          key={subscriptionParameter.id}
          date={subscriptionParameter.date}
          title={subscriptionParameter.title}
          PassedAmount={subscriptionParameter.amount}
        />
      ))} */}

      {/*
      <Subscription
        date={SubscriptionsArray[0].date}
        title={SubscriptionsArray[0].title}
        PassedAmount={SubscriptionsArray[0].amount}
      />
      <Subscription
        date={SubscriptionsArray[1].date}
        title={SubscriptionsArray[1].title}
        PassedAmount={SubscriptionsArray[1].amount}
      />
      <Subscription
        date={SubscriptionsArray[2].date}
        title={SubscriptionsArray[2].title}
        PassedAmount={SubscriptionsArray[2].amount}
      />
      */}
    </div>
  );
}

export default App;
