import React from 'react';
import Hamburguer from '../../hamburguer/index';


const Header: React.FC = () => {   
    return (         
        <header className="header">                     
            <nav>  
               <Hamburguer />   
               <h1 className="brand">Lab</h1>                                     
            </nav>
        </header>
    );
}

export default Header;