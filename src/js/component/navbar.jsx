import React from "react";



export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Objetivo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Productos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Cafe en grano / molido</a></li>
            <li><a className="dropdown-item" href="#">Articulos de marca</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Cafe Liofilizado</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Tienda online</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Busqueda" aria-label="Busqueda"/>
        <button className="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
        
      </form>
    </div>
  </div>
</nav>
}

