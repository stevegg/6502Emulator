import React, { FC, ReactElement, useContext } from 'react';
import MachineContext from '../MachineContext';
import styled from 'styled-components';

const RegistersContainer = styled.div`
    background: #282c34;
    height: 100%;
    text-align: left;
    padding: 5px;
`

const Registers:FC = ():ReactElement => {
    const machineContext = useContext(MachineContext);

    const toHex = (value: number, length: number = 4): string => {
        const padValues = '00000000'.substring(0, length);
        return '0x' + (padValues + value.toString(16).toUpperCase()).slice(-4); //009A
    }

    return (
        <RegistersContainer>
            PC: {toHex(machineContext.state.PC)}
        </RegistersContainer>
    );
}

export default Registers;