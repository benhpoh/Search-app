import React from 'react'
import './Result.css'
export default function Results({result}) {

  return (
    <li className="result-li">
      <a href={result.url} className="result-title">{result.title}</a>
      <a href={result.url} className="result-url">{result.url}</a>
      <p className="result-body">{result.body}</p>
      <div className="result-details">
        <div>Source</div>
        <div>Modified</div>
      </div>
      
    </li>
  )
  
}