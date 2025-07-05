import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark d-flex align-items-center">
                <div className="container">
                    <div className="nav navbar-nav d-flex align-items-center gap-3">
                        <img src={logo} alt="Logo" style={{ height: "40px" }} />
                        <Link className="nav-item nav-link" to="/">Home</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}