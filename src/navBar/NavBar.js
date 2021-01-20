import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './navBar.css'

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/photos" className="link">
            Photos
          </Link>
        </li>
        <li>
          <Link to="/posts" className="link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="link">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}
