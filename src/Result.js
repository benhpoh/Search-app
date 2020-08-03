import React from 'react'

export default function Results({result}) {

  return (
    <li>
      <a href={result.url}><h3>{result.title}</h3></a>
      <a href={result.url}><p>{result.url}</p></a>
      <p>{result.body}</p>
      
    </li>
  )
  
}