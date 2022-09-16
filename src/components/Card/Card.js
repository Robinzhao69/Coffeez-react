import "./Card.css"

const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt="latte art" />
    if(props.image === undefined){
        cardImage = <img src={"/img/beans.jpg"} alt="latte art" />
    }
    return(
        <article className="card">
            <figure className="card__figure">
                {cardImage}
            </figure>
            <section className="card__section">
                <p>{props.text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae quam id felis tristique tempus. Phasellus aliquam consequat pharetra."}</p>
            </section>
        </article>
    )
}

export default Card