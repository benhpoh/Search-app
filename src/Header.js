import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <h1>Search 365</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Search</Link>
      </nav>
    )
  }
}