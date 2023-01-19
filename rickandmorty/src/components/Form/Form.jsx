import Nav from "../Nav/Nav"
import style from './Form.module.css'
import { useState } from "react"
im

export default function Form () {

    const [userData, SetUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        
    })

    const handleChange = (event) => {

        SetUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        SetUserData({
            username: '',
            password: ''
        });
    }

    return(
            <div className={style.container}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="username" value={userData.username} 
                    onChange={handleChange} autoComplete='off' />
                    <br />
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" value={userData.password}
                    onChange={handleChange} />
                    <br />
                    <button type="submit">LOGIN</button>
                </form>
            </div>
    )
}