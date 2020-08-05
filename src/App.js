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

  handleFilteredQuery = (fromDate, toDate) => {
    this.setState({searchOngoing: true}, () => this.runDateFilteredSearch(fromDate, toDate))
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
      .post(url, {
        query: query,
        profile: profile
      })
      .then( apiResp => this.updateResultsState(apiResp) )
  }

  runDateFilteredSearch = (fromDate, toDate) => {
    const { query, profile } = this.state
    let url = "https://ds365api.search365.ai/search"
    console.log("sending request to API");
    axios
      .post(url, {
        query: query,
        profile: profile,
        filterData: `( modified gt ${fromDate} and modified lt ${toDate})`
      })
      .then( apiResp => this.updateResultsState(apiResp) )
  }

  updateResultsState = (apiResp) => {
    console.log("response received")
    console.log(apiResp.data)
    console.log("updating state")
    this.setState({results: apiResp.data, searchOngoing: false}, () => console.log("state updated"))
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
              handleFilteredQuery={this.handleFilteredQuery}
            />
          </main>
          <footer className="app-footer">
            <p>Built by <a href="https://www.benhpoh.com/about">Ben</a> | Source code on <a href="https://github.com/benhpoh/Search-app">GitHub</a></p>
          </footer>
        </div>
      </Router>
    )
  }
}

