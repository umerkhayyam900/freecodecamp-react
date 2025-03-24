import logo from "../assets/Globe.png"
export default function Header() {
    return(
        <header>
        <img src={logo} className="logo"/>
        <h2 className="header">my travel journal</h2>
        </header>
    )
}