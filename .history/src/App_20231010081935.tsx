import React from 'react';

import './App.css';
import MachineContext, {MachineContextInit} from './MachineContext';
import MemoryDisplay from './machine/MemoryDisplay';
import Registers from './machine.Registers';

import styled from 'styled-components';

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 5;
`

const ContentColumnSkinny = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  background: #282c34;
`

function App() {
  return (
    <div className="App">
      <MachineContext.Provider value={MachineContextInit}>
        <ContentRow>
          <ContentColumn>
            Something
          </ContentColumn>
          <ContentColumn>
            <MemoryDisplay />
          </ContentColumn>
          <ContentColumnSkinny>
            <Registers />
          </ContentColumnSkinny>
        </ContentRow>
      </MachineContext.Provider>
    </div>
  );
}

export default App;
