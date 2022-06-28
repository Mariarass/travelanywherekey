
import {connect} from 'react-redux'
import Modal from "./Modal";
import {setLanguage} from '../../redux/land-reduser'


let mapStateToProps=(state)=>{

    return{

        language:state.AboutPage.language
      
    }
}

let ModalContainer=connect(mapStateToProps,{setLanguage})(Modal)

export default  ModalContainer