import React from "react"

const Modal = (props) => {
    let Language=React.createRef()

    let changeLanguage = (language) => {
        props.setLanguage(language)
        Language.current.style.display = 'none'



    }

    return (
        <div  ref={Language} className='languageContainer'>
            <div >
                <div >
                    <button  className="language" onClick={() => { changeLanguage('ru') }}>
                        Russia
                    </button>
                </div>

                <div>
                    <button className="language" onClick={() => { changeLanguage('en') }}>English</button>
                </div>


            </div>



        </div>
    )
}
export default Modal