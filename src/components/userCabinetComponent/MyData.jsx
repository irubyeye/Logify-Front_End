import React from "react";
import "../../styles/App.css";

const MyData = ({ user }) => {
  const {
    city,
    country,
    email,
    login,
    name,
    phone,
    ratingsAverage,
    ratingsQuantity,
    surname,
  } = user;

  return (
    <article>
      <div className="user-details">
        <h2>User Details</h2>
        <div className="user-param">
          <strong>First Name:</strong> {name}
        </div>
        <div className="user-param">
          <strong>Last Name:</strong> {surname}
        </div>
        <div className="user-param">
          <strong>Login:</strong> {login}
        </div>
        <div className="user-param">
          <strong>Email:</strong> {email}
        </div>
        <div className="user-param">
          <strong>Phone:</strong> {phone}
        </div>
        <div className="user-param">
          <strong>City:</strong> {city}
        </div>
        <div className="user-param">
          <strong>Country:</strong> {country}
        </div>
        <div className="user-param">
          <strong>Ratings Average:</strong> {ratingsAverage}
        </div>
        <div className="user-param">
          <strong>Ratings Quantity:</strong> {ratingsQuantity}
        </div>
      </div>
    </article>
  );
};

export default MyData;
