import './LandingCard.scss';

export default function LandingCard(props) {
    return (
        <>
            <div className={props.classes} style={{backgroundColor: props.background}}>
                <h3 className="mb-3" style={{color: props.color, fontSize: '25px', fontWeight: '800'}}>{props.title}</h3>
                <p style={{fontSize: '13px'}}>{props.desc}</p>
            </div>
        </>
    );
}