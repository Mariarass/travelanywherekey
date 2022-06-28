
import {connect} from 'react-redux'
import Footer from "./Footer";


let mapStateToProps=(state)=>{

    return{
        
        water:state.AboutPage.water,
        languages:state.AboutPage.languages
      
    }
}

let FooterContainer=connect(mapStateToProps,)(Footer)

export default  FooterContainer