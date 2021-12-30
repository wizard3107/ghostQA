import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className>
      <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link link-light active"aria-current="page" to="/">SIGNIN</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link link-secondary"  to="/register">REGISTER</Link>
  </li>
</ul>
    </div>
  )
}
export default Nav
