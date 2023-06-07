import { FaStar } from 'react-icons/fa';

function Star(props) {
    return (
        <div>
            <FaStar
                className={props.isSelected ? 'star' : 'none'}
                onClick={props.onClick}
            />
        </div>
    )
}

export default Star;