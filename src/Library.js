import React, { useState } from "react";
import "./Library.css";
import Results from "./Results";
import axios from "axios";

export default function Library() {
  let [book, setBook] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data.docs[0]);
    console.log(response.data.docs[0].author_name);
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
        <h1>Find a Book</h1>
        <form onSubmit={searchBook}>
          <input
            className="searchbar"
            type="search"
            placeholder="Search for a Book Title"
            onChange={getBook}
          />
          <input type="submit" value="search" className="btn btn-dark" />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
