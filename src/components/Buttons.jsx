import React from 'react'
import { useDispatch } from 'react-redux';
import { setAlle } from '../actions/index';

import '../styles/Buttons.css'

const Buttons = () => {

    const dispatch = useDispatch()

    return(
        <div className='container-btn'>
            <button className='btn' onClick={() => dispatch(setAlle(true))}>Con Alergenos</button>
            <button className='btn' onClick={() => dispatch(setAlle(false))}>Sin Alergenos</button>
            
        </div>
    )
}

export default Buttons