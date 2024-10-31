import React from "react";

export default function Results(props) {
  if (props.results) {
    let isbn = props.results.isbn[0];
    let img = `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`;
    return (
      <div className="Results">
        <div className="section">
          <h2>Is this what you were looking for?</h2>
          <h4>Author:</h4>
          <p> {props.results.author_name[0]}</p>
          <h4>Book Title:</h4>
          <p>{props.results.title}</p>
          <img src={img} alt="Book Cover"></img>
          <h4>Published:</h4>
          <p> {props.results.first_publish_year}</p>
          <h4>First Sentence:</h4>
          <p>{props.results.first_sentence}</p>
          <h4>ISBN:</h4>
          <p>{props.results.isbn[0]}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
/* Next step is adding book cover api in new component, improve styling, add link to purchase maybe?? */
