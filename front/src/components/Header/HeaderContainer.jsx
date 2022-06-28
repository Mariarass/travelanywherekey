
import {connect} from 'react-redux'
import Header from "./Header";
import {setLanguage,setLanguageCount} from '../../redux/land-reduser'


let mapStateToProps=(state)=>{

    return{
        
        water:state.AboutPage.water,
        languages:state.AboutPage.languages,
        languageCounter:state.AboutPage.languageCounter,
      
    }
}

let HeaderContainer=connect(mapStateToProps,{setLanguage,setLanguageCount})(Header)

export default  HeaderContainer