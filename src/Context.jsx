import React from 'react';
import Collection from './components/Collection';

const Context = React.createContext();

function ContextProvider({ children }) {
    const [Collection, setCollection] = React.useState([])
  return <Context.Provider value="">{children}</Context.Provider>;
}
export { ContextProvider, Context };
