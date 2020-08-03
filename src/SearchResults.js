import React from 'react'
import Result from './Result.js'

export default function SearchResults({results}) {
  let searchSuccesful = results.isSuccess

  if (searchSuccesful !== true) {
    return <div></div>
  }
  
  let searchResults = results.body.results

  return (
    <div>
      <aside>
        <h4>{results.body.navigators[0].displayName} ({results.body.navigators[0].count})</h4>
        <div>
          {results.body.navigators[0].items.map(navigator => 
            <div>
              <input 
                type="radio" 
                name={results.body.navigators[0].displayName}
                value={navigator.name}
              />
              <label>
                {`${navigator.name} (${navigator.count})`}
              </label>
            </div>
          )}
        </div>
      </aside>
      
      <main>
        <ul>
        {
          searchResults.map(result => <Result result={result}/>)
        }
        </ul>
      </main>
    </div>
  )
  
}
