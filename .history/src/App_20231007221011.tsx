import React from 'react';

import './App.css';
import MachineContext, {MachineContextInit} from './MachineContext';
import MemoryDisplay from './machine/MemoryDisplay';
import RegistersDisplay from './machine/Registers';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
`

const Disassembly = styled.div`
  display: flex;
  order: 0;
  flex: 2 2 auto;
  align-self: stretch;
`

const Memory = styled.div`
  display: flex;
  order: 0;
  flex: 0 1 auto;
  align-self: stretch;
`

const Registers = styled.div`
  display: flex;
  order: 0;
  flex: 0 1 auto;
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
