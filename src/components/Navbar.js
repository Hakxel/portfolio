import React from 'react'

let Navbar = () => {
  return (
    <header id="header">
      <nav className="nav-wrapper">
        <ul className="nav-pills">
          <li className="active"><a href="#projects">Projects</a></li>
          <li className=""><a href="#bio">Bio</a></li>
          <li className=""><a href="/resume" target="_blank">Resume</a></li>
        </ul>
      </nav>         
    </header>
  )
}

export default Navbar