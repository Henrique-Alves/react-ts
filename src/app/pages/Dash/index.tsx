import React from 'react';
import Visitors from './components/visitors';
import './dash.scss';

const Dash: React.FC = () => {
    return (
        <section className="page-dash">
            <div className="wrap-1">
                <div className="box">
                   <Visitors />
                </div>
                <div className="box"> --Widgets-- </div>
            </div>
        </section>
    );
};

export default Dash;