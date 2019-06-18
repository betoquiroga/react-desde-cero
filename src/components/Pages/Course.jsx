import React from "react"

const cursos = [
    {
      "id": 1,
      "titulo": "React desde cero",
      "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
      "price": 40,
      "profesor": "Beto Quiroga"
    },
    {
      "id": 2,
      "titulo": "Drupal desde cero",
      "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
      "price": 30,
      "profesor": "Beto Quiroga"
    }, 
    {
      "id": 3,
      "titulo": "Go desde cero",
      "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
      "price": 50,
      "profesor": "Alexys Lozada"
    }, 
    {
      "id": 4,
      "titulo": "HTML desde cero",
      "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
      "price": 10,
      "profesor": "Alvaro Felipe"
    }
  ]

const Course = ({ match }) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
        {
            cursoActual ? (
                <>
                    <h1 className="m-cols-3"> { cursoActual.titulo } </h1>
                    <img className="m-cols-1" src={ cursoActual.image } alt={cursoActual.titulo}/>
                    <p className="m-cols-2">Profesor: {cursoActual.profesor} </p>
                </>
                ) : 
                 <h1>El curso no existe</h1>        
        }
        </div>
    )
}

export default Course