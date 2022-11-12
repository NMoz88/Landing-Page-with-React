import React from "react";

export default function Card ({titulo, descripcion, img, color}){
    return <div class="card" style={{"width": "18rem"}}>
    <img src={img} class="card-img-top" alt="..." height={200}/>
    <div class="card-body">
      <h5 class="card-title">{titulo}</h5>
      <p class="card-text">{descripcion}</p>
      <a href="#" class="btn btn-primary">Leer mas</a>
    </div>
  </div>
}