import { useState } from 'react';
import Button from '../Button';
import DropdownSelect from '../DropdownSelect';
import InputField from '../InputField';
import './Form.css';


const Form = (props) => {
    const initialState = { name: '', role: '', image: '', team: '' }
    const [fields, setFields] = useState(initialState);

    const initialNewTeam = { name: '', color: '' }
    const [fieldsTeam, setFieldsTeam] = useState(initialNewTeam);

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });    

    const handleFieldsTeamChange = (e) => setFieldsTeam({
        ...fieldsTeam,
        [e.currentTarget.name]: e.currentTarget.value
    });    

    const formMemberSave = (e) => {
        e.preventDefault();
        props.onSaveMember(fields);
        setFields(initialState);
    }

    const formTeamSave = (e) => {
        e.preventDefault();
        props.onSaveTeam(fieldsTeam);
        setFieldsTeam(initialNewTeam);
    }

    return (
        <section className='section-form'>
            <form onSubmit={formMemberSave}>
                <h2>Preencha os dados para criar o colaborador</h2>
                <InputField
                    id="name"
                    type="text"
                    title="Nome"
                    required={true}
                    placeholder="Digite seu nome"
                    value={fields.name}
                    onChanged={handleFieldsChange}
                />

                <InputField
                    id="role"
                    type="text"
                    title="Cargo"
                    required={true}
                    placeholder="Digite seu cargo"
                    value={fields.role}
                    onChanged={handleFieldsChange}
                />

                <InputField
                    id="image"
                    type="text"
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
            
            <form onSubmit={formTeamSave}>
                <h2>Preencha os dados para criar um time</h2>
                <InputField
                    id="name"
                    type="text"
                    title="Time"
                    required={true}
                    placeholder="Digite o nome do time"
                    value={fieldsTeam.name}
                    onChanged={handleFieldsTeamChange}
                />

                <InputField
                    id="color"
                    type="color"
                    title="Cor"
                    required={true}
                    placeholder="Escolha uma cor"
                    value={fieldsTeam.color}
                    onChanged={handleFieldsTeamChange}
                />

                <Button type='submit'>Criar Time</Button>
            </form>
        </section>
    );
}

export default Form;