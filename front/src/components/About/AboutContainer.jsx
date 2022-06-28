
import { setLand, setCard, setTicket, setLanguage, setLanguageCount } from "../../redux/land-reduser";
import About from "./About";
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from "react";

class AboutContainers extends React.Component {


    componentDidMount() {


        if (this.props.language === 'ru') {
            axios.get(`http://localhost:5000/api/card/`).then(response => {

                this.props.setCard(response.data)
            })

            axios.get(`http://localhost:5000/api/tour/`).then(response => {

                this.props.setTicket(response.data)
            })



        }

        if (this.props.language === 'en') {
            axios.get(`http://localhost:5000/api/cardEng/`).then(response => {

                this.props.setCard(response.data)
            })

            axios.get(`http://localhost:5000/api/tourEng/`).then(response => {

                this.props.setTicket(response.data)
            })

        }



        this.props.setLand(0)


    }





    changeStyle = (element, water, air) => {

        if (this.props.water === 0) { }
        else if (this.props.water === 1) { element.push(water) }
        else if (this.props.water === 2) { element.push(air) }
        return element.join(' ')

    }

    changeLanguage = (language) => {
   
        if (language === 'ru') {
            axios.get(`http://localhost:5000/api/card/`).then(response => {

                this.props.setCard(response.data)
            })

            axios.get(`http://localhost:5000/api/tour/`).then(response => {

                this.props.setTicket(response.data)
            })

       
        }

        if (language === 'en') {
            axios.get(`http://localhost:5000/api/cardEng/`).then(response => {

                this.props.setCard(response.data)
            })

            axios.get(`http://localhost:5000/api/tourEng/`).then(response => {

                this.props.setTicket(response.data)
            })

        }
        this.props.setLanguageCount(false)
    }



    render() {
      

        return <>

            <About water={this.props.water}
                card={this.props.card}
                ticket={this.props.ticket}
                setLand={this.props.setLand}
                changeStyle={this.changeStyle}
                languages={this.props.languages}
                changeLanguage={this.changeLanguage}
                setLanguage={this.props.setLanguage}
                language={this.props.language}
                languageCounter={this.props.languageCounter} />
        </>
    }
}
let mapStateToProps = (state) => {

    return {

        water: state.AboutPage.water,
        card: state.AboutPage.card,
        ticket: state.AboutPage.ticket,
        language: state.AboutPage.language,
        languages: state.AboutPage.languages,
        languageCounter: state.AboutPage.languageCounter,

    }
}

let AboutContainer = connect(mapStateToProps, { setLand, setCard, setTicket, setLanguage, setLanguageCount })(AboutContainers)

export default AboutContainer