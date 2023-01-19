import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
//import { Link } from "react-router-dom";

export default function Nav ({onSearch}) {
    return (
        <div>
            {/* <div>
                <Link to='/Home' >Home</Link>
                <Link to='/About' >About</Link>
                <Link to='Detail' >Detail</Link>   
            </div> */}
            <div className={style.container}>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
       
    )
}