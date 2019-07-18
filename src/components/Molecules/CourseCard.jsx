import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import CartContext from '../Context/Cart/CartContext';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Context/Cart/actions';

const CourseCard = ({id, title, image, price, professor}) => {

    const [state, dispatch] = useContext(CartContext)

    return (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <Link to={`/cursos/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">{title}</h3>
                <div className="s-main-center">
                    { professor }
                </div>
                <div className="s-main-center">
                    { state.cart.find(c => c === id) ?
                        <button onClick={() => dispatch({
                            type: REMOVE_FROM_CART,
                            course: id
                        })}
                            className="button--ghost-alert button--tiny">
                            Remover del carrito
                        </button>
                        :
                        <button onClick={() => dispatch({
                            type: ADD_TO_CART,
                            course: id
                        })} 
                        className="button--ghost-alert button--tiny">
                        { `$ ${price} USD`} 
                        </button>
                    }
                </div>
            </div>
        </article>
    )
}



CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

CourseCard.defaultProps = {
    title: "No se encontró título",
    image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
    price: "--",
    profesor: ""
}

export default CourseCard