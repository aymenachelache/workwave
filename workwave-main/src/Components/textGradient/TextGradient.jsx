import './TextGradient.scss';

export default function TextGradient(props) {
    return (
        <>
        <span className="textGradient primaryfont" style={{fontSize: props.size, fontWeight: props.weight}}>{props.text}</span>
        </>
    );
}