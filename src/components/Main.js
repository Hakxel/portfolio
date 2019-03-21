import React from 'react'
import Navbar from './Navbar'
import SocialLinks from './SocialLinks'



let Main = () => {
  return (
    <section id="hero">
      <Navbar />
      <div class="hero-body">
        <SocialLinks />        
        <div class="hero-right">
          <h3>A portfolio by</h3>
          <h1>Asiel Montes</h1>
          <h2>Web Developer</h2>
          <a href="#contact">Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default Main