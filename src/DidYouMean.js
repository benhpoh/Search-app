import React from 'react'
import './DidYouMean.css'

export default function DidYouMean({value, handleQueryUpdate}) {
  return (
    <div>
      <p>Did you mean: <span className="dym-link" onClick={evt => handleQueryUpdate(value)}>{value}</span> ?</p>
    </div>
  )
}