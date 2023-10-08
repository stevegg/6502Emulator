import React from 'react';

import './App.css';
import MachineContext, {MachineContextInit} from './MachineContext';
import MemoryDisplay from './machine/MemoryDisplay';

function App() {
  return (
    <div className="App">
      <MachineContext.Provider value={MachineContextInit}>
        <MemoryDisplay />
      </MachineContext.Provider>
    </div>
  );
}

export default App;
