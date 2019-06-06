import React from 'react';
import "./styles/styles.scss"
import Curso from "./Curso"


const cursos = [
  {
    "titulo": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    "price": 40,
    "profesor": "Beto Quiroga"
  },
  {
    "titulo": "Drupal desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    "price": 30,
    "profesor": "Beto Quiroga"
  }, {
    "titulo": "Go desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    "price": 50,
    "profesor": "Alexys Lozada"
  }, {
    "titulo": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
    "price": 10,
    "profesor": "Alvaro Felipe"
  }
]


const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos de EDteam</p>
          <p> Tu futuro te está esperando</p>
          <a href="https://ed.team" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    {
      cursos.map( c => <Curso title={c.titulo} image={c.image} price={c.price} profesor={c.profesor} /> )
    }
  </div>
  </>
)
  
export default App;