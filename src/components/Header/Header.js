import "./Header.css"
const Header = (props) => {
    return(
        <header className="header">
            <h1 className="header__h1">{props.bigTitle || "Default big title"}</h1>
            <h2 className="header__h2">{props.smallTitle || "Default small title"}</h2>
            <button className="header__button">{props.buttonText || "Default"}</button>
        </header>
    )
}

export default Header;