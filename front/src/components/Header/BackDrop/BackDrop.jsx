import style from './BackDrop.module.css'
const BackDrop = (props) => {


    return  props.sideToggle && <div  onClick={props.menubar} className={style.backDrop}></div>
}
export default BackDrop