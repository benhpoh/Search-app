import React from 'react'
import './DidYouMean.css'

export default function DidYouMean({value, onClick}) {
  return (
    <div>
      <p>Did you mean: <span className="dym-link" onClick={evt => onClick(value)}>{value}</span> ?</p>
    </div>
  )
}