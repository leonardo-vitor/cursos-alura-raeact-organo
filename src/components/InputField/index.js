import { useState } from 'react';
import './InputField.css';

const InputField = (props) => {
    const onInputed = (e) => {
        props.onChanged(e)
    }

    return (
        <div className='input-field'>
            <label htmlFor={props.id}>{props.title}</label>
            <input
                id={props.id}
                type={props.type}
                name={props.id}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onChange={onInputed}
            />
        </div>
    );
}

export default InputField;