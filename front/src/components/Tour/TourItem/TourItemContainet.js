
import { connect } from 'react-redux'
import TourItem from './TourItem';
import Error from './Error';
import { setTour, setImage, setLanguageCount } from '../../../redux/land-reduser'
import React from 'react';
import * as axios from 'axios'
import {
    useParams,
} from "react-router-dom";

class TourItemContainers extends React.Component {


    componentDidMount() {

        let Id = this.props.router.id



        if (this.props.language === 'ru') {
            axios.get(`http://www.travelanywherekey.com:5000/api/card/${Id}`)
                .then(response => {
                    console.log(response)

                    this.props.setTour(response.data)
                    this.props.setImage(response.data.img)
                })
        }
        if (this.props.language === 'en') {
            axios.get(`http://www.travelanywherekey.com:5000/api/cardEng/${Id}`)
                .then(response => {

                    this.props.setTour(response.data)
                    this.props.setImage(response.data.img)
                })
        }






    }

    changeLanguage = () => {


        let Id = this.props.router.id




        if (this.props.language === 'ru') {
            axios.get(`http://www.travelanywherekey.com:5000/api/card/${Id}`)
                .then(response => {

                    this.props.setTour(response.data)

                })
        }
        if (this.props.language === 'en') {
            axios.get(`http://www.travelanywherekey.com:5000/api/cardEng/${Id}`)
                .then(response => {

                    this.props.setTour(response.data)

                })
        }
        this.props.setLanguageCount(false)






    }







    changeStyle = (element, water, air) => {


        if (this.props.water === 0) { }
        else if (this.props.water === 1) { element.push(water) }
        else if (this.props.water === 2) { element.push(air) }

        return element.join(' ')

    }



    render() {



        if (this.props.languageCounter === true) {
            this.changeLanguage(this.props.language)


        }


        if (this.props.currentTour != null) {

            return <>

                <TourItem  {...this.props}
                    changeStyle={this.changeStyle}
                    changeLanguage={this.changeLanguage} />
            </>
        }
        else{
        return<>
        <Error/>
        </>}
    }
}
let mapStateToProps = (state) => {

    return {


        currentTour: state.AboutPage.currentTour,
        water: state.AboutPage.water,
        currentTourImg: state.AboutPage.currentTourImg,
        language: state.AboutPage.language,
        languages: state.AboutPage.languages,
        languageCounter: state.AboutPage.languageCounter,
    }





}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {


        let Id = useParams();


        return (
            <Component
                {...props}
                router={Id}
            />
        );
    }
    return ComponentWithRouterProp;
}
let TourItemContainer = connect(mapStateToProps, { setTour, setImage, setLanguageCount })(withRouter(TourItemContainers))

export default TourItemContainer