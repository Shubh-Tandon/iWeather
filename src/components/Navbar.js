import React from 'react'

export default function Navbar() {
  return (
   <>
<nav className="navbar navbar-expand-lg my-1 myNav mx-5 ">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand" href="#">iWeather</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> 
    
</ul>
    
    </div>
  </div>
</nav>

   </>
  )
}