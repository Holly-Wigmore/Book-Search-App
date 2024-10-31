import React, { useState } from "react";
import "./Library.css";
import Results from "./Results";
import axios from "axios";

export default function Library(props) {
  let [book, setBook] = useState(props.defaultBook);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data.docs[0]);
  }

  function search() {
    let apiUrl = `https://openlibrary.org/search.json?q=${book}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchBook(event) {
    event.preventDefault();
    search();
  }

  function getBook(event) {
    setBook(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Library">
        <div className="section">
          <h1>Find a Book</h1>
          <form onSubmit={searchBook}>
            <input
              className="searchbar"
              type="search"
              placeholder="Search for a Book Title"
              autoFocus
              onChange={getBook}
            />
            <input type="submit" value="search" className="btn btn-dark" />
          </form>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
