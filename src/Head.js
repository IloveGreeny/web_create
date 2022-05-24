import "./Header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <a href="/web_create/" className="link">
                <img src="data:image/png;base64,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" alt="nojkb;o" width="50px" className="img"/>
            </a>
            <div className="header-right">
                <></>
                <Link to="/web_create">Home Page</Link>
                <Link to="/web_create/products">Products</Link>
                <Link to="/web_create/contact">Contact</Link>

            </div>
        </div>
    )
}