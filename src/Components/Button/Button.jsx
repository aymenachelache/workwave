import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button(props) {
    return (
        <>
            <Link className={props.classes} to={props.link} style={props.clicked ?
                {
                    color: `${props.color}`,
                    backgroundColor: `transparent`,
                    border: props.border && `2px solid ${props.color}`,
                    padding: '8px 10px',
                    borderRadius: '16px'
                } :
                {
                    color: `#fff`,
                    backgroundColor: props.color,
                    border: `2px solid ${props.color}`,
                    padding: '8px 10px',
                    borderRadius: '16px'
                }
            }>{props.text}{props.object}</Link>
        </>
    );
}