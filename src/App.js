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
    results: {},
    searchOngoing: false
  }
  
  handleQueryChange = query => {
    this.setState({ query: query })
  }

  handleProfileChange = profile => {
    this.setState({ profile: profile })
  }

  handleQueryUpdate = (query) => {
    this.setState({query: query, searchOngoing: true}, () => this.runSearch())
  }

  handleSubmitSearch = (evt) => {
    evt.preventDefault()
    // code to run to commence search
    this.setState({searchOngoing: true}, () => this.runSearch())
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
          this.setState({results: apiResp.data, searchOngoing: false})
          console.log("updating state");
        }
      )
  }

  render() {
    const { query, profile, results, searchOngoing } = this.state
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="app-main">
            <SearchBar 
              query={query}
              profile={profile}
              handleQueryChange={this.handleQueryChange}
              handleProfileChange={this.handleProfileChange}
              handleSubmitSearch={this.handleSubmitSearch}
              searchOngoing={searchOngoing}
            />

            <SearchResults 
              results={results}
              handleQueryUpdate={this.handleQueryUpdate}
            />
          </main>
        </div>
      </Router>
    )
  }
}

