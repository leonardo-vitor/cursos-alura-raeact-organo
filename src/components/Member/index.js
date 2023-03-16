import './Member.css';

const Member = (props) => {
    const {name, role, image, team} = props.member;
    
    return (
        <div className='member'>
            <div className='header' style={{backgroundColor: props.headerColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Member;