
import { ReactComponent as Star } from '../../img/star.svg'
const Guide = (props) => {
    return (
        <div className="contentGuide">


            <div >
                <img className="guideImage" src={props.img} alt="" />
                <div className="rating">
                    <div>
                        <p>{props.rating}</p>
                    </div>

                    <div >
                        <Star className="ratingIcon"/>
                    </div>

                </div>
            </div>

            <div className="guideAbout">
                <p> <span className='guideName'>{props.name} </span> <br/> {props.about} </p>
            </div>



        </div>
    )
}

export default Guide