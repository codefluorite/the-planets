import { ReactNode } from 'react';
import { Link } from "react-router-dom";
import "./Layout.css"; // Import external styles
import banner from "../assets/header.gif";

interface Props {
    children?: ReactNode;
}

const Layout = ({children} : Props) => {
    return (
        <div className="layout">
            <div className="header">
                <img src={banner} alt="The written planets" className="banner-img" />
            </div>
            <div className="navbar">
                <Link to='/'>Home</Link> | <Link to='/earth'>The Earth</Link> | <Link to='/jupiter'>Jupiter</Link> | <Link to='/mercury'>Mercury</Link> | <Link to='/mars'>Mars</Link> | <Link to='/moon'>The Moon</Link> | <Link to='/neptune'>Neptune</Link> | <Link to='/saturn'>Saturn</Link> | <Link to='/sun'>The Sun</Link> | <Link to='/uranus'>Uranus</Link> | <Link to='/venus'>Venus</Link>
            </div>
            <div className="content"><div className="poem-box">{children}</div></div>
            <div className="footer">Created by codeFluroite &#169; 2025 </div>
        </div>
    )
}

export default Layout;