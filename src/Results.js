import React from "react";

export default function Results(props) {
  console.log(props.results);
  return (
    <div className="Results">
      <h2>Is this what you were looking for?</h2>
      <p>
        {props.results.author_name}
        <br />
        {props.results.title}
        <br />
        {props.results.first_publish_year}
        <br />
      </p>
    </div>
  );
}
/* Next step is adding book cover api in new component, improve styling, add link to purchase maybe?? */
