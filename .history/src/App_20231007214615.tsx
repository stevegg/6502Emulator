import React from 'react';

import './App.css';
import MachineContext, {MachineContextInit} from './MachineContext';
import MemoryDisplay from './machine/MemoryDisplay';
import styled from 'styled-components';

const ContentColumn = styled.div`
  flex: 50%;
`

function App() {
  return (
    <div className="App">
      <MachineContext.Provider value={MachineContextInit}>
        <ContentColumn>
          Something
        </ContentColumn>
        <ContentColumn>
          <MemoryDisplay />
        </ContentColumn>
      </MachineContext.Provider>
    </div>
  );
}

export default App;
