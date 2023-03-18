import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Member.css';

const Member = ({ member, headerColor, onRemove, onFavorite }) => {
    function favorite() {
        onFavorite(member.id);
    }

    const attributesFavorite = {
        size: 20,
        onClick: favorite
    }

    return (
        <div className='member'>
            <AiFillCloseCircle className='remove' onClick={(e) => onRemove(member.id)} />
            <div className='member-header' style={{ backgroundColor: headerColor }}>
                <img src={member.image} alt={member.name} />
            </div>
            <div className='member-footer'>
                <h4>{member.name}</h4>
                <h5>{member.role}</h5>
                <div className='favorite'>
                    {member.favorite
                        ? <AiFillHeart {...attributesFavorite} color='red' />
                        : <AiOutlineHeart {...attributesFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Member;