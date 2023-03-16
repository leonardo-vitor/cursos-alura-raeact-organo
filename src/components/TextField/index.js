import { useState } from 'react';
import './TextField.css';

const TextField = (props) => {
    const onInputed = (e) => {
        props.onChanged(e)
    }

    return (
        <div className='text-field'>
            <label htmlFor={props.id}>{props.title}</label>
            <input id={props.id} name={props.id} placeholder={props.placeholder} required={props.required} value={props.value} onChange={onInputed} />
        </div>
    );
}

export default TextField;