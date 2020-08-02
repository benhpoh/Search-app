import React from 'react'

export default function SearchBar(props) {
  return (
    <form className="search-bar">
      <input 
        type="text" 
        value={props.query}
        onChange={evt => props.onQueryChange(evt.target.value)}
        placeholder="Enter search terms"
      />

      <select 
        name="profile" 
        id="profile" 
        defaultValue={props.profile}
        onChange={evt => props.onProfileChange(evt.target.value)}
        onKeyPress={evt => evt.key === 'Enter' ? props.onSubmitSearch(evt) : null }
      >
        <option value="all">All Sources</option>
        <option value="search365">Search365</option>
        <option value="intranet">Intranet</option>
        <option value="multifacetquery">Multi Facet Query Support</option>
        <option value="teams">Teams</option>
      </select>

      <button 
        type="submit"
        onClick={evt => props.onSubmitSearch(evt)}
      >
        Search
      </button>
    </form>
  )
}