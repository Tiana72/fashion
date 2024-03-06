import './card.css';
import arrowImg from './../../img/icons/arrow.svg';

const Card = (props) => {
    /* const Card = ({title, image}) => { */
    /* const {title, image} = props; */
    return (
        <div className="card">
            <a className='card__link' href='#!'></a>
                <img className='card__img' src={props.image} alt="" />
                <div className="card__body">
                    <div className="card__desc">
                        <h4 className="card__title">{props.title}</h4>
                        <p className="card__explore">Explore Now!</p>
                    </div>
                    <img className="arrow" src={arrowImg} alt="" />
                </div>
        </div>
    );
}

export default Card;