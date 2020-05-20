import React, { useContext} from 'react';
import LayoutContext from '../../shared/contexts/layoutContext';

const Hamburguer: React.FC = () => {
    const [layout, setLayout] = useContext(LayoutContext);

    const handlerToggle = () =>{
        const updateLayout = {...layout, navToggle: !layout.navToggle};
        setLayout(updateLayout);       
    }

    return (
        <button className={`hamburguer ${layout.navToggle ? "active" : ""}`} onClick={handlerToggle}>
            <span className="linha"></span>
            <span className="linha"></span>
            <span className="linha"></span>
        </button>
    );
}

export default Hamburguer;