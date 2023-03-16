import Member from '../Member';
import './Team.css';

const Team = (props) => {
    return (
        props.members.length > 0 && <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>
                {props.name}
            </h3>

            <div className='members' key={props.name}>
                {props.members.map(member => <Member member={member} headerColor={props.primaryColor} />)}
            </div>
        </section>
    )
}

export default Team;