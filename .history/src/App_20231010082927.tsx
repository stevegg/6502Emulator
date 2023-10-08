import React from 'react';

import './App.css';
import MachineContext, {MachineContextInit} from './MachineContext';
import MemoryDisplay from './machine/MemoryDisplay';
import Registers from './machine/Registers';

import styled from 'styled-components';

const ContentRow = styled.div`
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    align-items: flex-start;
`
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1 1 auto;
  align-self: stretch;
`

const ContentColumnSkinny = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 0 1 auto;
  align-self: stretch;
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
