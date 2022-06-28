import './Footer.css'
import { ReactComponent as Landscape } from './../../img/Landscape.svg'
import { ReactComponent as Instagram } from './../../img/instagram.svg'
import { ReactComponent as WhatsApp } from './../../img/whatsapp.svg'
import { ReactComponent as Email } from './../../img/email.svg'
const Footer = (props) => {


    let changeStyle = (element, water, air) => {



        if (props.water === 0) { }
        else if (props.water === 1) { element.push(water) }
        else if (props.water === 2) { element.push(air) }
        return element.join(' ')

    }
    const landscapeFooter = ['landscapeFooter']
    return (

        <div className='footer'>

            <Landscape className={changeStyle(landscapeFooter, 'landscapeFooterWater', 'landscapeFooterAir')} width='100%' height='300px' preserveAspectRatio="none" />
            <div className='descriptionFooter'>



                <div className='AboutFooter'>
                   {props.languages.aboutUs}

                </div>
                <div className='contactInfotmation'>

                    <a href='https://wa.me/971585286861?text=' target="_blank">
                        <WhatsApp className='footerSvg' /></a>

                    <a href='https://www.instagram.com/travelanywherekey/' target="_blank">
                        <Instagram className='footerSvg' />
                    </a>


                    <a class="mailtoui" href="mailto:mr.isaev86@gmail.com">
                        <Email className='footerSvg' />
                    </a>



                </div>

            </div>
        </div>
    )
}
export default Footer