# Search-app

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