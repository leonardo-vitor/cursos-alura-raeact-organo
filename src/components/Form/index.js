import { useState } from 'react';
import Button from '../Button';
import DropdownSelect from '../DropdownSelect';
import TextField from '../TextField';
import './Form.css';


const Form = (props) => {
    const initialState = { name: '', role: '', image: '', team: '' }
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });    

    const formSave = (e) => {
        e.preventDefault();
        props.onSaveMember(fields);
        setFields(initialState);
    }

    return (
        <section className='section-form'>
            <form onSubmit={formSave}>
                <h2>Preencha os dados para criar o colaborador</h2>
                <TextField
                    id="name"
                    title="Nome"
                    required={true}
                    placeholder="Digite seu nome"
                    value={fields.name}
                    onChanged={handleFieldsChange}
                />

                <TextField
                    id="role"
                    title="Cargo"
                    required={true}
                    placeholder="Digite seu cargo"
                    value={fields.role}
                    onChanged={handleFieldsChange}
                />

                <TextField
                    id="image"
                    title="Imagem"
                    required={false}
                    placeholder="Informe o endereço da imagem"
                    value={fields.image}
                    onChanged={handleFieldsChange}
                />

                <DropdownSelect
                    id="team"
                    title="Time"
                    required={true}
                    placeholder="Selecione o time do seu colaborador"
                    options={props.teams}
                    value={fields.team}
                    onChanged={handleFieldsChange}
                />

                <Button type='submit'>Criar Card</Button>
            </form>
        </section>
    );
}

export default Form;