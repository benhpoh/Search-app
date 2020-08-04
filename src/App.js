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
    this.runSearch()
  }

  runSearch = () => {
    const { query, profile } = this.state
    let url = "https://ds365api.search365.ai/search"
    console.log("sending request to API");
    axios
      .post(
        url, 
        {
          query: query,
          profile: profile
        }
      )
      .then( apiResp => {
          console.log("response received");
          console.log(apiResp.data);
          this.setState({ results: apiResp.data})
          console.log("updating state");
        }
      )
  }

  onClick = (query) => {
    this.setState({query: query}, () => this.runSearch())

  }

  render() {
    const { query, profile,results } = this.state
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="app-main">
            <SearchBar 
              query={query}
              profile={profile}
              onQueryChange={this.onQueryChange}
              onProfileChange={this.onProfileChange}
              onSubmitSearch={this.onSubmitSearch}
            />
            <SearchResults 
              results={results}
              onClick={this.onClick}
            />
          </main>
        </div>
      </Router>
    )
  }
}

