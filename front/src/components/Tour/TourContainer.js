
import { connect } from 'react-redux'
import Tour from "./Tour";
import { setCard,setLanguageCount } from '../../redux/land-reduser'
import React from 'react';
import * as axios from 'axios'



class TourContainers extends React.Component {


    componentDidMount() {

        if (this.props.language === 'ru') {
            axios.get(`http://localhost:5000/api/card/`)
                .then(response => {

                    this.props.setCard(response.data)
                })
        }

        if (this.props.language === 'en') {
            axios.get(`http://localhost:5000/api/cardEng/`)
                .then(response => {

                    this.props.setCard(response.data)
                })
        }


    }

    changeLanguage=()=> {
        console.log(this.props.language )

        if (this.props.language === 'ru') {
            axios.get(`http://localhost:5000/api/card/`)
                .then(response => {

                    this.props.setCard(response.data)
                })
        }

        if (this.props.language === 'en') {
            axios.get(`http://localhost:5000/api/cardEng/`)
                .then(response => {

                    this.props.setCard(response.data)
                })
        }

        this.props.setLanguageCount(false)


    }


    render() {



        return <>

            <Tour  {...this.props}
            changeLanguage={this.changeLanguage} />
        </>
    }
}

let mapStateToProps = (state) => {

    return {

        card: state.AboutPage.card,
        language: state.AboutPage.language,
        languages: state.AboutPage.languages,
        languageCounter: state.AboutPage.languageCounter
    }
}

let TourContainer = connect(mapStateToProps, { setCard,setLanguageCount })(TourContainers)

export default TourContainer