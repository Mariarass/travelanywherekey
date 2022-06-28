import { NavLink } from 'react-router-dom'
import './SideDrawer.css'
const SideDrawer = (props) => {


    const sideDrawerStyle = ['sideDrawer']
    if (props.sideToggle) {
        sideDrawerStyle.push('show')
    }

    return (

        <div className={sideDrawerStyle.join(' ')}>
            <div className='links'>
            <div className='link'>
                <NavLink to='/#' className='linkItem'>{props.content.about}</NavLink>
            </div >
            <div className='link'>
                <NavLink to='/tour'className='linkItem'>{props.content.tour}</NavLink>
            </div>
            <div className='link'>
                <NavLink to='/ticket' className='linkItem'>{props.content.ticket}</NavLink>
            </div>
            <div className='link'>
                <NavLink to='/contact'className='linkItem'>{props.content.contact}</NavLink>
            </div>
            </div>
        </div>)
}
export default SideDrawer