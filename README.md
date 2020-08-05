# Search-app

## Build log
- Framework set up for essential components.
- Set state functions incorporated into SearchBar component.
- Submit button functionality completed. Next step: Tie in async request to get data from API
- Search functionality completed, data passed in to app's state.
- State passed through to SearchResults, search results populated once data received.
- Basic CSS styling across components.
- Coded did you mean component.
- Rectified recursion issue with Did you mean?
- Toggled disabling searchbar while a search is currently ongoing.
- Completed function to enable filtering by date.
- Last Modified & source information added to search results.
- CSS styling on font.
- Styled search bar to make it clearer a search is ongoing

## To Do List
- ~~Set up components for Header, Search bar, Search results~~
- ~~Header~~
  - Simple nav bar
- ~~Search bar~~
  - Search input box
  - Search profile category
- Search results
  - ~~Create async function to get search results from S365 API~~
  - ~~Pass search results to component~~
  - ~~Organize filter method for sorting by date~~
- Did you mean?
  - ~~Enable refreshing search results upon selecting new search term~~
- ~~Enable filter by date method~~
- ~~Place 'Source' and 'Last modified' info into search results~~

## Thinking out loud
- Single source for state management at 'App' level, passing relevant info to components
  - Pass setstate functions through to SearchBar component
  - SearchBar on submit => pass 'query' parameter back to 'App', and App to perform async request to search API
  - After receiving results of search, set state to update results and display on SearchResults component

## Search365 API
Search requests are sent via Post request.

Bare minimum information needed in the body of a search request:
- "query" (string)
- "profile" (string - "all", "search365", "intranet", "multifacetquery", "teams")

Response:
Did it work?
- body.isSuccess (Boolean)

Results stored at:
- body.body.results (Array)

filterData field:
What filters are available?
- datasource, category, modified, extension