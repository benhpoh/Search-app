import React from 'react'
import Result from './Result.js'
import DidYouMean from './DidYouMean.js'
import './SearchResults.css'

export default function SearchResults({results, handleQueryUpdate}) {
  let searchSuccesful = results.isSuccess

  if (searchSuccesful !== true) {
    return <div></div>
  }
  
  let searchResults = results.body.results
  let currentSearchQuery = results.body.searchDefinition.query
  let didYouMean = results.body.didYouMean[0]

  return (
    <div className="search-results-container">
      {currentSearchQuery != didYouMean ? <DidYouMean value={didYouMean} handleQueryUpdate={handleQueryUpdate}/> : ""}
      <div className="search-layout">
        <aside className="search-filters">
          <h4>{results.body.navigators[0].displayName} ({results.body.navigators[0].count})</h4>
          <div>
            {results.body.navigators[0].items.map((navigator, index) => 
              <div key={navigator.name}>
                <input 
                  type="radio" 
                  name={results.body.navigators[0].displayName}
                  value={index}
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
