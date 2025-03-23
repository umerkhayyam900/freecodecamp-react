import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'))
root.render(
    <div>
        <Header />
        <Page />
        <Footer />
    </div>
)

function Header() {
    return(
        <header className="header">
        <img src="./images.png" className="image" alt="react logo"/>
        <nav>
        <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
        </ul>
    </nav>
    </header>
    )
}

function Page() {
    return(
        <main>
            <h1>Reasons I love React!</h1>
            <ol>
                <li>React has state management</li>
                <li>React is declarative</li>
                <li>React has reusable components feature</li>
            </ol>
        </main>
    )
}

function Footer() {
    return(
        <footer>
                <small>
                    All Rights Reserved
                </small>
            </footer>
    )
}