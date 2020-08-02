# Search-app

## Build log
- Submit button functionality completed. Next step: Tie in async request to get data from API
- Set state functions incorporated into SearchBar component.
- Framework set up for essential components.

## To Do List
- ~~Set up components for Header, Search bar, Search results~~
- ~~Header~~
  - Simple nav bar
- ~~Search bar~~
  - Search input box
  - Search profile category
- Search results
  - Create async function to get search results from S365 API
  - Pass search results to component
  - Organize filter method for sorting by date

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
- datasource, category
- lastModifed?? 