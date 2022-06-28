
import {connect} from 'react-redux'
import Contact from "./Contact";



let mapStateToProps=(state)=>{

    return{

        languages:state.AboutPage.languages
      
    }
}

let ContactContainer=connect(mapStateToProps,{})(Contact)

export default  ContactContainer