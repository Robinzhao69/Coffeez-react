import "./Section.css"

const Section = (props) => {
    return(
        <section className="section">
            <header className="section__header">
                <i class="fa-solid fa-mug-saucer"></i>
                <h2 className="section__h2">{props.headerTitle || "Title"}</h2>
            </header>
            <div className="section__wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Section