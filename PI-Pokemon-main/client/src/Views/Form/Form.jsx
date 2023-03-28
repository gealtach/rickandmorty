import { Link, useHistory } from 'react-router-dom';
import { getAllTypes, postPokemon } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Form.module.css';
import { validate } from './validate';

const Form = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);

    const [input, setInput] = useState({
        name: '', hp: '', speed: '', height: '', attack: '', weight: '', defense: '', types: [], image: ''
    });
    const [error, setError] = useState({}) 

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }) 
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value
            })) 
        
    }

    const handlerCheckBox = (e) => {
        if (e.target.checked) {

            setInput({
                ...input,
                types: [...input.types, e.target.value]
            }) 
        } 
        if (!e.target.checked) {
            input.types.splice(input.types.indexOf(e.target.value), 1) 
            setInput({
                ...input
            }) 
        } 
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        dispatch(postPokemon(input));
        setInput({
            name: '', hp: '', speed: '', height: '', attack: '', weight: '', defense: '', types: [], image: ''
        });
        history.push('/home');
    }

    return(
        <div>
            <div className={style.btnContainer}>
                <Link className={style.backBtn} to='/home'><button>Back</button></Link>
            </div>
            <h1 className={style.fH1}>Crea tu Pokemon</h1>
            <form className={style.formBox} onSubmit={handlerSubmit}> 
                <div className={style.divBox}>
                <div className={style.row}>
                    <label>Name:  </label>
                    <input type="text" value={input.name} name='name' onChange={handleChange} />
                    {error.name && (<span>{error.name}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Health Points:  </label>
                    <input type="text" value={input.hp} name='hp' onChange={handleChange} />
                    {error.hp && (<span>{error.hp}</span>)} 
                </div>
                <div className={style.row}> 
                    <label>Speed:  </label>
                    <input type="text" value={input.speed} name='speed' onChange={handleChange} />
                    {error.speed && (<span>{error.speed}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Height:  </label>
                    <input type="text" value={input.height} name='height' onChange={handleChange} />
                    {error.height && (<span>{error.height}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Attack:  </label>
                    <input type="text" value={input.attack} name='attack' onChange={handleChange} />
                    {error.attack && (<span>{error.attack}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Weight:  </label>
                    <input type="text" value={input.weight} name='weight' onChange={handleChange} />
                    {error.weight && (<span>{error.weight}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Defense:  </label>
                    <input type="text" value={input.defense} name='defense' onChange={handleChange} />
                    {error.defense && (<span>{error.defense}</span>)} 
                </div>
                <div className={style.row}>
                    <label>Image:  </label>
                    <input type="text" value={input.image} name='image' onChange={handleChange} />
                    {error.image && (<span>{error.image}</span>)}
                </div>
                </div>
                
                <div className={style.types}>
                    {types?.map((element) => {
                        return (
                            <div key={element}>
                                <label htmlFor="types" >{element}</label>
                                <input className={style.inpBox} type="checkbox" name={element} value={element} onChange={handlerCheckBox} />
                            </div>
                        )
                    })}
                </div>
                
                <button className={style.subBtn} type='submit'>Create Pokemon</button>
            </form> 
        </div>
    )
}

export default Form;