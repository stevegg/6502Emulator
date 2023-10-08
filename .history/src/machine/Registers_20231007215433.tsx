import React, { FC, ReactElement, useContext } from 'react';
import MachineContext from '../MachineContext';
import styled from 'styled-components';

const RegistersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Registers:FC = ():ReactElement => {
    const machineContext = useContext(MachineContext);

    return <RegistersContainer></RegistersContainer>
}

export default Registers;