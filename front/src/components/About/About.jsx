import './About.css'
import AwesomeSlider from 'react-awesome-slider';
import style from './react-awesome-slider/dist/styles.css';
import { ReactComponent as Landscape } from './../../img/Landscape.svg'
import AboutContent from './AboutContent/AboutContent'
import { NavLink } from 'react-router-dom';
import CardTour from '../Tour/CardTour/CardTour';
import CardTicket from '../Ticket/CardTicket/CardTicket';
import video1 from '../../img/IMG_5733.MOV'
import video2 from '../../img/lego.mp4'
import video3 from '../../img/IMG_2022.MP4'
import video4 from '../../img/IMG_5684.MOV'
import video5 from '../../img/museum.mp4'


import video6 from '../../img/fish.mp4'
import video7 from '../../img/deep.mp4'
import video8 from '../../img/yacht.mp4'
import video9 from '../../img/acva.mp4'
import video10 from '../../img/fly.mp4'

import video11 from '../../img/IMG_2025.MP4'
import video12 from '../../img/parachute.mp4'
import video13 from '../../img/vertolet.mp4'
import video14 from '../../img/zip.mp4'
import video15 from '../../img/air.mp4'


import React from 'react';


const About = (props) => {
  
  



  if (props.languageCounter === true) {
    props.changeLanguage(props.language)



  }
  let changeColor = (selected) => {

    let water = selected.nextMedia.children.props.slide

    if (water === 0) { props.setLand(0) }
    else if (water === 1) { props.setLand(1) }
    else if (water === 2) { props.setLand(2) }
  }


  const landscape1 = ['Landscape1']
  const landscape2 = ['Landscape2']
  const infiniteHeader = ['infiniteHeader']




  return (
    <div>
      <div className='About'>

        <div className='Landscapes'>

          <Landscape className={props.changeStyle(landscape1, 'Landscape1Water', 'Landscape1Air')} preserveAspectRatio="none" />

          <div className={props.changeStyle(landscape2, 'Landscape2Water', 'Landscape2Air')}>
            <Landscape className='lands' preserveAspectRatio="none" />
          </div>

        </div>

        <AwesomeSlider cssModule={style} onTransitionRequest={(selected) => { changeColor(selected) }}>
          <div className='slider1'>
            <AboutContent video={[video1, video2, video3, video4, video5]} changeStyle={props.changeStyle} slide={0} water={props.water} header={props.languages.earth}
              des={[props.languages.individual, props.languages.group, props.languages.entertaining, props.languages.cognitive, props.languages.children]} />
          </div>

          <div className='slider1'>
            <AboutContent video={[video6, video7, video8, video9, video10]} changeStyle={props.changeStyle} slide={1} water={props.water} header={props.languages.water}
              des={[props.languages.sea, props.languages.waterparks, props.languages.yacht, props.languages.flyboarding, props.languages.diving]} />

          </div>


          <div className='slider1'>
            <AboutContent video={[video11, video12, video13, video14, video15]} changeStyle={props.changeStyle} slide={2} water={props.water} header={props.languages.air}
              des={[props.languages.fly, 'ZIP-LINE', props.languages.helicopter, props.languages.balloon, props.languages.parachute]} />

          </div>



        </AwesomeSlider>

      </div>



      <div >

        <p className={props.changeStyle(infiniteHeader, 'infiniteHeaderWater', 'infiniteHeaderAir')} >{props.languages.providedTour} <br />travelanywherekey </p>

      </div>


      <div className='CardContainer'>
        <div className='Card'>

          {props.card.map(c => {
            if (c.id__ < 7) {

              return (<CardTour  card={c} />)
            }
          })}

        </div>
      </div>


      <div className='showMore'>
        <NavLink to='/tour ' className='showLink'>{props.languages.see}</NavLink>
      </div>


      <div >

        <p className={props.changeStyle(infiniteHeader, 'infiniteHeaderWater', 'infiniteHeaderAir')} > {props.languages.providedTicket}<br />travelanywherekey </p>

      </div>


      <div className='CardContainer'>
        <div className='Card'>
          {props.ticket.map(c => {
            if (c.id__ < 7) {
              return (<CardTicket changeStyle={props.changeStyle}  ticket={c} />)
            }
          })}
        </div>
      </div>

      <div className='showMore'>
        <NavLink to='/ticket' className='showLink'>{props.languages.see}</NavLink>
      </div>



    </div>


  )
}
export default About