import { ReactComponent as Instagram } from './../../img/instagram.svg'
import { ReactComponent as WhatsApp } from './../../img/whatsapp.svg'
import { ReactComponent as Email } from './../../img/email.svg'
import { ReactComponent as Logo } from './../../img/logo.svg'
import './Header.css';
import { NavLink } from 'react-router-dom';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';
import { useState } from 'react';

const Header = (props) => {
   
    let menuBar = () => {

        (sideToggle === false ? setSideToggle(true) : setSideToggle(false))
    }

    const [sideToggle, setSideToggle] = useState(false)


    const navbarItem = ['navBarItem']
    const networkItem = ['networkItem']
    const logo = ['logo']
    const menubar = ['menubar']

    if (props.water === 0) {
        navbarItem.push('land')
        networkItem.push('land')
        menubar.push('land')

    }

    if (props.water === 1) {
        navbarItem.push('water')
        networkItem.push('water')
        logo.push('logoWater')
        menubar.push('water')
    }

    if (props.water === 2) {
        navbarItem.push('air')
        networkItem.push('air')
        logo.push('logoAir')
        menubar.push('air')
    }

    


    let changeLanguage=(language)=>{
   
        if(props.languageCounter===false){
            props.setLanguageCount(true)
        }
        props.setLanguage(language.target.value)
       
    }
   
    return (<div>


        <header className="App-container">


            <div className='header'>

                <div className='headerLogo'>
                    <Logo className={logo.join(' ')} />
                </div>

                <nav className='navBar'>

                    <div >
                        <NavLink to='/#' className={navbarItem.join(' ')}>{props.languages.about}</NavLink>
                    </div>
                    <div>
                        <NavLink to='/tour' className={navbarItem.join(' ')}>{props.languages.tour}</NavLink>
                    </div>
                    <div>
                        <NavLink to='/ticket' className={navbarItem.join(' ')}>{props.languages.ticket}</NavLink>
                    </div>
                    <div>
                        <NavLink to='/contact' className={navbarItem.join(' ')}>{props.languages.contact}</NavLink>
                    </div>
                  
                </nav>
                
               


                <div className='network'>


                    <a href='https://www.instagram.com/travelanywherekey/' target="_blank">
                        <Instagram className={networkItem.join(' ')} />
                    </a>
                    <a href='https://wa.me/971585286861?text=' target="_blank" >
                        <WhatsApp className={networkItem.join(' ')} />
                    </a>
                    <a class="mailtoui" href="mailto:mr.isaev86@gmail.com">
                        <Email className={networkItem.join(' ')} />
                    </a>



                </div>

                <div className='selectContainer'>
                <select className='select' onChange={(value)=>{changeLanguage(value)}}>
                        <option value="ru">ru</option>
                        <option value="en">en</option>
                    </select>
                </div>

                <div className={menubar.join(' ')}>
                    <i class="fa-solid fa-bars" onClick={() => { menuBar() }}></i>
                </div>

            </div>


        </header>

        <SideDrawer content={props.languages} water={props.water} sideToggle={sideToggle} />
        <BackDrop menubar={menuBar} sideToggle={sideToggle} />
    </div>
    )
}
export default Header