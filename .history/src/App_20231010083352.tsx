import React from 'react';

import './App.css';
import MachineContext, {MachineContextInit} from './MachineContext';
import MemoryDisplay from './machine/MemoryDisplay';
import RegistersDisplay from './machine/Registers';

import styled from 'styled-components';

const Container = styled.div`
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

const Disassembly = styled.div`
  -webkit-order: 0;
  order: 0;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: stretch;
  align-self: stretch;
`

const Memory = styled.div`
  -webkit-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: stretch;
  align-self: stretch;
`

const Registers = styled.div`
  -webkit-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: stretch;
  align-self: stretch;
`

function App() {
  return (
    <div className="App">
      <MachineContext.Provider value={MachineContextInit}>
        <Container>
          <Disassembly>
            Something
          </Disassembly>
          <Memory>
            <MemoryDisplay />
          </Memory>
          <Registers>
            <RegistersDisplay />
          </Registers>
        </Container>
      </MachineContext.Provider>
    </div>
  );
}

export default App;
