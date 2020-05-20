import React from 'react';
import Header from '../../components/header';
import NavLeft from '../../components/NavLeft';
import { useSession} from '../../hooks';
import {LayoutProvider, defaultLayout, LayoutI} from '../../contexts/layoutContext';
import { SESSION } from '../../constants';


const MainLayout: React.FC = (props) => {
    const [layout, setLayout]= useSession<LayoutI>(SESSION.LAYOUT, defaultLayout);

    return (
        <LayoutProvider value={[layout, setLayout]}>
            <section className="main-app">
                <Header />
                <NavLeft />
                <main className={layout.navToggle ? 'shrink' : 'expand'}>{props.children}</main>
                <footer>footer</footer>
            </section>
        </LayoutProvider>
    );
}

export default MainLayout;