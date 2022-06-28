
import { ReactComponent as Clock } from './../../../img/clock.svg'
import './CardTour.css'
import { NavLink } from 'react-router-dom'

const CardTour = (props) => {
  

    return (
       
                <NavLink to={`/tour/${props.card._id}`} className='cardLink'>

                    <div className='cardItem'>

                        

                        <img className='cardItemIMG' src={props.card.img} />
                        <div className='tourStatus'>
                            <p className='tourStatusDetails'>{props.card.status} </p>
                            <p className='tourStatusHour'> {props.card.time}</p>
                            <Clock className='tourStatusClock' />
                        </div>

                        <h3 className='tourHeader'>{props.card.header}</h3>
                        <p className='tourDescription'>{props.card.description}
                        </p>
                        <div className='tourPrice' >
                            <h2 className='tourPriceDetails'>{props.card.price}</h2>
                            <p className='tourStatusDetails'>{props.card.tour}</p>
                        </div>


                    </div>
                </NavLink>



      
    )
}
export default CardTour