import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <h1 className="header-link" >Search 365</h1>
        <Link className="header-link" to={"/"}>Home</Link>
        <Link className="header-link" to={"/search"}>Search</Link>
      </nav>
    )
  }
}