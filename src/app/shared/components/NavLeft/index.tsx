import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LayoutContext from '../../contexts/layoutContext';

const NavLeft: React.FC = () => {
    const [{navToggle}] = useContext(LayoutContext);

    return (
        <section className={`navleft ${navToggle ? "open-nav" : "close-nav"}`}>
            <div className="brand-lab">
                <span className="logo">
                 <b className="lab-iconrounded-pie-chart"></b>
                </span>
            </div>
            <nav className={`nav${navToggle ? "active" : ""}`}>
                <li>
                    <Link to="/">
                    <i className="lab-iconmaths-graphic"></i>
                    <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Sobre">
                        <i className="lab-iconclipboard-1"></i>
                        <span>Sobre</span>
                    </Link>
                </li>               
            </nav>          
        </section>
    );
}

export default NavLeft;