import './DropdownSelect.css';

const DropdownSelect = (props) => {
    const onInputed = (e) => {
        props.onChanged(e)
    }
    
    return (
        <div className='dropdown-select'>
            <label htmlFor={props.id}>{props.title}</label>
            <select name={props.id} id={props.id} required={props.required} value={props.value} onChange={onInputed}>
                <option value=''></option>
                {
                    props.options.map((option) => <option key={option}>{option}</option>)
                }
            </select>
        </div>
    );
}

export default DropdownSelect;