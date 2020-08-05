import React from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
  return (
    <form className="searchbar">
      <input 
        type="text" 
        className="searchbar-input"
        value={props.query}
        onChange={evt => props.handleQueryChange(evt.target.value)}
        placeholder="Enter search terms"
        disabled={props.searchOngoing}
      />

      <select 
        name="profile" 
        id="profile" 
        defaultValue={props.profile}
        onChange={evt => props.handleProfileChange(evt.target.value)}
        onKeyPress={evt => evt.key === 'Enter' ? props.handleSubmitSearch(evt) : null }
      >
        <option value="all">All Sources</option>
        <option value="search365">Search365</option>
        <option value="intranet">Intranet</option>
        <option value="multifacetquery">Multi Facet Query Support</option>
        <option value="teams">Teams</option>
      </select>

      <button 
        type="submit"
        className="searchbar-button"
        onClick={evt => props.handleSubmitSearch(evt)}
      >
        Search
      </button>
    </form>
  )
}