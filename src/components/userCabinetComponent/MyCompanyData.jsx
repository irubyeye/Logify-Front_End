import React from "react";

export default function MyCompanyData(props) {
  return (
    <article>
      <div style={{ marginTop: "10px" }} className="user-details">
        <h3>User's company information</h3>
        <div className="user-param">
          Current user is owner of:
          <strong> {props.company.name}</strong>
        </div>
        <div className="user-param">
          Description: {props.company.description}
        </div>
        <div className="user-param">
          Rating of the company : {props.company.ratingsAverage}
        </div>
        <div className="user-param">
          Number of deliveries: {props.company.deliveries?.length}
        </div>
      </div>
    </article>
  );
}
