
import './Contact.css'
import Guide from './Guide'
import React from 'react'
import { ReactComponent as Instagram } from './../../img/instagram.svg'
import { ReactComponent as WhatsApp } from './../../img/whatsapp.svg'
import { ReactComponent as Email } from './../../img/email.svg'
import { ReactComponent as Call } from './../../img/call.svg'

import guideYr from '../../img/yur.png'
import guideDenis from '../../img/guide.jpg'
import guideAlex from '../../img/alex.jpg'
import guideOleg from '../../img/oleg.jpg'
import Advantage from '../../img/way.png'
import Communication from '../../img/communication.png'
import Price from '../../img/price.png'
import Info from '../../img/info.png'
import Car from '../../img/car.png'

const Contact = (props) => {
    return (
        <div className='contactContainer'>


            <div className="contact">



                <h3 className='headerGuide'>{props.languages.order}</h3>

                <div className='connectContainer'>
                    <div className='connect'>
                        <div className='connectItem'> <Call className='svgContact' /> <p> +971-585-2-8686-1</p></div>

                        <div className='connectItem'><a href='https://wa.me/971585286861?text=' target="_blank"> <WhatsApp className='svgContact' /></a> <p>+971-585-2-8686-1</p></div>

                        <div className='connectItem'>
                            <a class="mailtoui" href="mailto:mr.isaev86@gmail.com">
                                <Email className='svgContact' />
                            </a>
                            <p>mr.isaev86@gmail.com</p>
                        </div>


                        <div className='connectItem'>
                            <a href='https://www.instagram.com/travelanywherekey/' target="_blank">
                                <Instagram className='svgContact' />
                            </a>
                            <p>thravelanywherekay</p>
                        </div>



                    </div>
                </div>




                <h3 className='headerGuide'>{props.languages.chosen}</h3>

                <div className='advatageContainer'>
                    <div className='advantageIcons'>

                        <div>
                            <img className='advantageIcon' src={Advantage} />
                        </div>
                        <div>
                            <img className='advantageIcon' src={Price} />
                        </div>
                        <div>
                            <img className='advantageIcon' src={Communication} />
                        </div>
                        <div>
                            <img className='advantageIcon' src={Info} />
                        </div>
                        <div><img className='advantageIcon' src={Car} />    </div>

                    </div>
                    <div className='advantageText'>
                        <p className='advantage'>{props.languages.advantage1}</p>
                        <p className='advantage'>{props.languages.advantage2}</p>
                        <p className='advantage'>{props.languages.advantage3}</p>
                        <p className='advantage'>{props.languages.advantage4}</p>
                        <p className='advantage'>{props.languages.advantage5}</p>
                    </div>



                </div>



                <h3 className='headerGuide'>{props.languages.guides}</h3>

                
                <Guide name={props.languages.name1} img={guideYr} rating='4,9'

                    about={props.languages.guide1} />
                <Guide name={props.languages.name2} img={guideDenis} rating='4,73'

                    about={props.languages.guide2} />
                <Guide name={props.languages.name3} img={guideAlex} rating='4,55'

                    about={props.languages.guide3}/>
                <Guide name={props.languages.name4} img={guideOleg} rating='4,5'
                    about={props.languages.guide4}/>


            </div>



        </div>
    )

}
export default Contact