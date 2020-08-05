import React from 'react'
import Result from './Result.js'
import DidYouMean from './DidYouMean.js'
import './SearchResults.css'

export default function SearchResults({results, handleQueryUpdate, handleFilteredQuery}) {
  let searchSuccesful = results.isSuccess

  if (searchSuccesful !== true) {
    return <div></div>
  }
  
  let searchResults = results.body.results
  let currentSearchQuery = results.body.searchDefinition.query
  let didYouMean = results.body.didYouMean[0]
  let filterCategory = results.body.navigators[0]

  return (
    <div className="search-results-container">
      {
        currentSearchQuery != didYouMean ? 
          <DidYouMean value={didYouMean} handleQueryUpdate={handleQueryUpdate}/> :
          ""
      }

      <div className="search-layout">
        <aside className="search-filters">
          <h4>{filterCategory.displayName} ({filterCategory.count})</h4>
          <div>
            {filterCategory.items.map((navigator, index) => 
              <div key={navigator.name}>
                <input 
                  type="radio" 
                  name={filterCategory.displayName}
                  value={index}
                  onClick={(evt) => {handleFilteredQuery(navigator.from, navigator.to)}}
                  disabled={navigator.count <= 0}
                />
                <label>
                  {`${navigator.name} (${navigator.count})`}
                </label>
              </div>
            )}
          </div>
        </aside>
        
        <div className="search-results">
          <ul>
          {
            searchResults.map((result, index) => <Result result={result} key={index}/>)
          }
          </ul>
        </div>
      </div>
    </div>
  )
  
}
