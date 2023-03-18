import hexToRgba from 'hex-to-rgba';
import Member from '../Member';
import './Team.css';

const Team = ({ team, members, onRemove, onChangeTeamColor, onFavorite }) => {
    return (
        members.length > 0 && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(team.color, .18) }}>
            <input type='color' className='input-color' value={team.color} onChange={e => onChangeTeamColor(e.target.value, team.id)} />

            <h3 style={{ borderColor: team.color }}>
                {team.name}
            </h3>

            <div className='members' key={team.name}>
                {members.map(member => {
                    return (
                        <Member
                            key={member.name}
                            member={member}
                            headerColor={team.color}
                            onRemove={onRemove}
                            onFavorite={onFavorite}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Team;