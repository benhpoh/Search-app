import React from 'react'

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <select name="profile" id="profile">
          <option value="all">All Sources</option>
          <option value="search365">Search365</option>
          <option value="intranet">Intranet</option>
          <option value="multifacetquery">Multi Facet Query Support</option>
          <option value="teams">Teams</option>
        </select>
      </div>
    )
  }
}