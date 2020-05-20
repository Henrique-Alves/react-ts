import React from 'react';

const LayoutContext = React.createContext<any>([]);

export interface LayoutI {
    navToggle: boolean;
}
export const defaultLayout: LayoutI = {
    navToggle: false,
}

export const LayoutProvider = LayoutContext.Provider;
export const LayoutConsumer = LayoutContext.Consumer;

export default LayoutContext;