

import React, { createRef } from 'react'

import './AboutContent.css'
import { ReactComponent as Map } from '../../../img/Group.svg'

import { ReactComponent as Local } from '../../../img/local.svg'
import { ReactComponent as Loading } from '../../../img/Loading.svg'




const AboutContent = (props) => {
  let Block0 = React.createRef()
  let Block1 = React.createRef()
  let Block2 = React.createRef()
  let Block3 = React.createRef()
  let Block4 = React.createRef()

  let Block = [Block0, Block1, Block2, Block3, Block4]


  let changeBlock = (Block) => {

    Block.current.style.display = 'flex'

  }
  let changeBlock2 = (Block) => {
    Block.current.style.display = 'none'

  }

  const map = ['map']
  const headerAbout = ['headerAbout']

  return (
    <div className='slider1'>
      <div className='ABOUT'>
        <h1 className={props.changeStyle(headerAbout, 'headerAboutWater', 'headerAboutAir')}>{props.header}</h1>
        <div className='planet' >
          <Map className={props.changeStyle(map, 'mapWater', 'mapAir')} />

        </div>


        {Block.map((b, c) =>
          <div className={`local l${c}`} onMouseOver={() => changeBlock(b)} onMouseLeave={() => changeBlock2(b)}>
            <Local className='localImg'/>
          </div>)}


        {props.des.map((d, c) => <div key={d.id} className={`headerAboutLocal h${c}`}>{d}</div>)}

        {props.video.map((v, c) =>

          <div className={`blockVideo b${c}`} ref={Block[c]}>
           
            <video className='headerVideo' src={v} autoPlay loop muted></video>
          </div>)}

      </div>


    </div>
  )

}
export default AboutContent