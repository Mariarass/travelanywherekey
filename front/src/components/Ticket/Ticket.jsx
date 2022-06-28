import { NavLink } from "react-router-dom"
import CardTicket from "./CardTicket/CardTicket"
import style from './../Tour/Tour.module.css'

import './Ticket.css'

import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useState } from 'react';
import { ReactComponent as Apply } from '../../img/applay.svg'
import { ReactComponent as Clear } from '../../img/clear.svg'

const Ticket = (props) => {

    if (props.languageCounter === true) {
        props.changeLanguage(props.language)
    
    
    
      }


    const [city, changeCity] = useState()
    const [where, changeWhere] = useState()


    return (
        <div className={style.container}>
            <div className={style.tour}>
                <NavLink to='/#' className={style.link}>{props.languages.main}</NavLink>

                <h1 className={style.tourHeader}>{props.languages.ticket}</h1>
                <p className={style.tourDescription}>{props.languages.ticketAbout}</p>

                <div className='filter'>
                    <div className="comboContainer">
                        <Combobox
                            defaultValue={props.languages.Emirate}
                            data={[props.languages.dubai,props.languages.AbuDhabi]}
                            onChange={(value) => { changeCity(value) }}
                        />
                    </div>

                    <div className="comboContainer">
                        <Combobox
                            defaultValue={props.languages.place}
                            data={[props.languages.e,props.languages.w,props.languages.a]}
                            onChange={(value) => { changeWhere(value) }}

                        />
                    </div>
                        <div>
                            <button className='button' onClick={() => { props.changeTicket(city, where) }}>
                                <Apply className='apply' />
                            </button>

                            <button className='button' onClick={() => { props.changeTicket('undefined', 'undefined') }}>
                                <Clear className='apply' />
                            </button>


                        </div>

                    </div>



                    <div className='CardContainer'>
                        <div className='Card'>

                        {props.ticket.map(c => (<CardTicket key={c.id} whats={props.languages.whats}changeStyle={props.changeStyle} ticket={c} />))}


                        </div>
                    </div>

                </div>


            </div>
            )
}
            export default Ticket