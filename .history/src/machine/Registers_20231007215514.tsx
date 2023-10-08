import React, { FC, ReactElement, useContext } from 'react';
import MachineContext from '../MachineContext';
import styled from 'styled-components';

const RegistersContainer = styled.div`
background: #282c34;
`

const Registers:FC = ():ReactElement => {
    const machineContext = useContext(MachineContext);

    return <RegistersContainer></RegistersContainer>
}

export default Registers;