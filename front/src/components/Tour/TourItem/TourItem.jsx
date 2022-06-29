
import style from './TourItem.module.css'
import './TourItems.css'
import { ReactComponent as Clock } from './../../../img/clocks.svg'
import { ReactComponent as Car } from './../../../img/car.svg'
import { ReactComponent as Place } from './../../../img/place.svg'
import { ReactComponent as Dot } from './../../../img/dot.svg'
import { NavLink } from 'react-router-dom';
import write from './../../../img/write.png'



const TourItem = (props) => {
    




    let count = 0

    if (props.currentTour.expectation != undefined) {

        count = Object.keys(props.currentTour.expectation).length
    }


    let arrays = []
    for (let i = 1; i <= count; i++) {
        arrays.push(i)
    }

    const styleSVG = ['svg']
    const mainHeader = ['mainHeader']



    let changeImage=(URL)=>{
        props.setImage(URL)

    }
    

    
    return (
        <div className={style.container}>
            <div className={style.c}>

                <div className={style.containerheader}>

                    <div className={style.header}>
                        <div className={style.contentHeader}>


                            <NavLink to='/#' className={style.link}>{props.languages.main}</NavLink>
                            <h1 className={props.changeStyle(mainHeader, 'Water', 'Air')} >{props.currentTour.header}</h1>
                            <p className={style.informationHeader}>{props.currentTour.statusHeader}</p>
                            <h2 className={props.changeStyle(mainHeader, 'Water', 'Air')}>{props.currentTour.price}</h2>
                            <div className={style.information}>
                                <Clock className={props.changeStyle(styleSVG, 'svgWater', 'svgAir')} />
                                <Car className={props.changeStyle(styleSVG, 'svgWater', 'svgAir')} />
                                <Place className={props.changeStyle(styleSVG, 'svgWater', 'svgAir')} />
                            </div>

                            <div className={style.information}>
                                <p className={style.info}>{props.currentTour.time}</p>
                                <p className={style.info}> {props.currentTour.transport}</p>
                                <p className={style.info}> {props.currentTour.place}</p>




                            </div>
                            <div className={style.information}>
                                <p className={style.infoStatic} >{props.languages.duration}</p>
                                <p className={style.infoStatic}>{props.languages.pass}</p>
                                <p className={style.infoStatic}>{props.languages.meeting} </p>
                            </div>

                        </div>

                    </div>

                </div>



                <div className={style.contentDescript}>


                    <div className={style.descriptionContainer}>

                        <div>
                            <p className={style.discriptionDetails}>{props.currentTour.descriptionFull}</p>

                        </div>


                        <h3 className={props.changeStyle(mainHeader, 'Water', 'Air')}>{props.languages.waypoints}</h3>
                        <div className={style.routesContainer}>

                            <div className={style.route}>

                                <div className={style.containerLine}>


                                    <div className={style.line}>

                                    </div>

                                    <div className={style.dotContainer}>
                                        <div>
                                            {arrays.map(a => <Dot className={style.imgDot} />)}

                                        </div>
                                    </div>

                                </div>



                                <div className={style.array}>
                                    {props.currentTour.expectation != undefined && props.currentTour.expectation.map((e,m) =>{
                                      
                                        return(
                                         <p  onMouseOver={() => changeImage(props.currentTour.imgArray[m])}  className={style.arrayItem}>{e}
                                         </p>
                                         )})}

                                </div>

                            </div>

                            <div>

                                <div className={style.imgContainer}>
                                    
                                    <img  className={style.image} src={props.currentTourImg}/>
                                </div>


                            </div>
                        </div>

                        <h3 className={props.changeStyle(mainHeader, 'Water', 'Air')}>{props.languages.organization}</h3>
                        <p className={style.discriptionDetails}>

                            <h4>{props.languages.aboutex}</h4>
                            {props.currentTour.transportDetailes}
                            <h4>{props.languages.cost}</h4>
                            {props.currentTour.free}
                            <h4>{props.languages.separately} </h4>
                            {props.currentTour.expenses != undefined && props.currentTour.expenses.map(e=><p> - {e}</p>)}
                   

                        </p>
                        <div >

                           
                            <h2 className={props.changeStyle(mainHeader, 'Water', 'Air')}>
                            {props.languages.write}
                            </h2>

                            <div className={style.writeContainer}>
                                <div className={style.write}>
                                    <a href='https://wa.me/971585286861?text=' target="_blank" className={style.writeLink}><img className={style.linkImg} src={write} /></a>
                                </div>
                            </div>


                        </div>



                    </div>






                </div>
            </div>

        </div>
    )
}
export default TourItem