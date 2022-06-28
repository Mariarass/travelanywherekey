import { ReactComponent as Clock } from './../../../img/clock.svg'
import { ReactComponent as TicketSVG } from './../../../img/ticket.svg'
import { NavLink } from 'react-router-dom'
import style from './CardTicket.module.css'
const CardTicket = (props) => {

    return (
        <a href='https://wa.me/971585286861?text=' target="_blank" className={style.link}>

           
            <div className={style.cardItem}>
                
                <div className={style.imgContainer}>
                    
                    <img className={style.cardItemIMG} src={props.ticket.img} />
                    <div className={style.order}>
                    {props.whats}
                    </div>

                </div>



                <h3 className={style.tourHeader}>{props.ticket.header}</h3>

                <div className={style.tourStatus}>
                    <Clock className={style.tourStatusClock} />
                    <p className={style.tourStatusHour}> {props.ticket.time}</p>

                </div>
                <div className={style.about}>{props.ticket.about}</div>

                <div className={style.tourPrice} >
                    <TicketSVG className={style.ticket} />
                    <h2 className={style.tourPriceDetails}>{props.ticket.price}</h2>

                </div>


            </div>


        </a>
    )
}
export default CardTicket