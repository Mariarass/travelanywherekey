
import { NavLink } from "react-router-dom"
import CardTour from "./CardTour/CardTour"


import style from './Tour.module.css'
const Tour = (props) => {
    console.log(props.languageCounter)
    if (props.languageCounter === true) {
        props.changeLanguage(props.language)
    
    
    
      }

    return (

        <div className={style.container}>
            <div className={style.tour}>

                <NavLink to='/#' className={style.link}>{props.languages.main}</NavLink>


                
                <h1 className={style.tourHeader}>{props.languages.tour} </h1>
                <p className={style.tourDescription}>{props.languages.tourAbout}</p>
               <div className={style.cardContainer}>
               <div className='CardContainer '>
                    <div className='Card'>
                        {props.card.map(c =>
                            <CardTour card={c} />)}
                    </div>
                </div>
               </div>
               
               
            </div>



        </div>


    )
}
export default Tour 