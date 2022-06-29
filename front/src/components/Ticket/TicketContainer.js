import { connect } from "react-redux";
import Ticket from "./Ticket";
import { setTicket,setLanguageCount } from "../../redux/land-reduser";
import * as axios from 'axios'
import React from "react";

class TicketContainers extends React.Component {

    componentDidMount() {

        if (this.props.language === 'ru') {
        axios.get(`http://www.travelanywherekey.com:8000/api/tour/`).then(response => {

            this.props.setTicket(response.data)
            
        })}
        if (this.props.language === 'en') {
            axios.get(`http://www.travelanywherekey.com:8000/api/tourEng/`).then(response => {
    
                this.props.setTicket(response.data)
                
            })}


    }

    changeLanguage=()=>{

        if (this.props.language === 'ru') {
        axios.get(`http://www.travelanywherekey.com:8000/api/tour/`).then(response => {

            this.props.setTicket(response.data)
            
        })}
        if (this.props.language === 'en') {
            axios.get(`http://www.travelanywherekey.com:8000/api/tourEng/`).then(response => {
    
                this.props.setTicket(response.data)
                
            })}
            this.props.setLanguageCount(false)


    }

    


    changeTicket = (city,where) => {
        
        if (this.props.language === 'ru') {
        axios.get(`http://www.travelanywherekey.com:8000/api/tour?city=${city}&where=${where}`).then(response => {
     
        this.props.setTicket(response.data)
        })}

        if (this.props.language === 'en') {
            axios.get(`http://www.travelanywherekey.com:8000/api/tourEng?city=${city}&where=${where}`).then(response => {
         
            this.props.setTicket(response.data)
            })}
    }

    changeStyle =(element,water,air)=>{

        if (this.props.water === 0) { }
        else if (this.props.water === 1) { element.push(water) }
        else if (this.props.water === 2) {element.push(air) }
        return element.join(' ')
    
      }
    
    

    render() {
       
        return <>

            <Ticket
                ticket={this.props.ticket}
                changeTicket={this.changeTicket}
                changeStyle={this.changeStyle}
                languages={this.props.languages}
                languageCounter={this.props.languageCounter}
                changeLanguage={this.changeLanguage}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {


        ticket: state.AboutPage.ticket,
        water:state.AboutPage.water,
        language:state.AboutPage.language,
        languages:state.AboutPage.languages,
        languageCounter:state.AboutPage.languageCounter,
    }
}

let TicketContainer = connect(mapStateToProps, {setTicket,setLanguageCount})(TicketContainers)

export default TicketContainer
