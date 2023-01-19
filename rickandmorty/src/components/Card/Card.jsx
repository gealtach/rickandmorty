import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={style.card}>
         <button className={style.closeButton} onClick={props.onClose}>X</button>
         {/* <h2><Link to={`/detail/${props.id}`} >{props.name}</Link></h2> */}
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={style.img} src={props.image} alt={props.name} />
      </div>
   );
}

// import React from 'react';
// import {connect} from 'react-redux'
// import { addFavorite, deleteFav } from '../../redux/action';

// class Card extends React.Component{
//    constructor(props){
//       super(props)
//    }

//    render(){
//       <></>
//    }
// }

// const mapStateToProps = (state) => {
//    return{

//    }
// }

// const mapDispatchToPros = (dispatch) => {
//    return {
      
//    }
// }

// export default connect(
//    mapStateToProps,
//    mapDispatchToPros
// )(Card);