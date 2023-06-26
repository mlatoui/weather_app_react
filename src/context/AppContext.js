import React, { createContext, useEffect, useState } from 'react';
import produce from 'immer';

export const AppContext = createContext();

export let immutableSetStateExternal;

const AppContextProvider = (props) => {
  const [appState, setAppState] = useState({
    search: '',
    selctedCityInfo: {},
    unitTemp: 'C',
  });

  let immutableSetState = (updatedStateCBFn) => {
    setAppState(produce(updatedStateCBFn));
  };

  useEffect(() => {
    immutableSetStateExternal = immutableSetState;
  }, []);

  return (
    <AppContext.Provider value={[appState, immutableSetState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
