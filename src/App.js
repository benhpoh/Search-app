import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './Header.js'
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults.js'

const axios = require('axios');

export default class App extends React.Component {

  state = {
    query: "",
    profile: "all",
    results: {}
  }
  
  onQueryChange = query => {
    this.setState({ query: query })
  }

  onProfileChange = profile => {
    this.setState({ profile: profile })
  }

  onSubmitSearch = (evt) => {
    evt.preventDefault()
    // code to run to commence search
    const { query, profile } = this.state
    let url = "https://ds365api.search365.ai/search"

    axios
      .post(
        url, 
        {
          query: query,
          profile: profile
        }
      )
      .then( apiResp => {
          console.log(apiResp.data);
          this.setState({ results: apiResp.data})
        }
      )
  }

  render() {
    const { query, profile,results } = this.state
    return (
      <Router>
        <div className="App">
          <Header />
          <SearchBar 
            query={query}
            profile={profile}
            onQueryChange={this.onQueryChange}
            onProfileChange={this.onProfileChange}
            onSubmitSearch={this.onSubmitSearch}
          />
          <SearchResults 
            results={results}
          />
        </div>
      </Router>
    )
  }
}

