import React from 'react'
import './Result.css'
export default function Results({result}) {
  let dateModified = new Date(result.lastModified).toString()
  dateModified = dateModified.split(" ").slice(1, 4).join(" ") // Store only date information

  let {url, title, body, source} = result

  return (
    <li className="result-li">
      <a href={url} className="result-title">{title}</a>
      <a href={url} className="result-url">{url}</a>
      <p className="result-body">{body}</p>

      <div className="result-details">
        <div className="result-subdetails">
          {source}
        </div>
        <div className="result-subdetails">
          Modified: {dateModified}
        </div>
      </div>
      
    </li>
  )
  
}