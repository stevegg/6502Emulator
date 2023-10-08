import React, { FC, ReactElement, useContext } from 'react';
import MachineContext from '../MachineContext';
import styled from 'styled-components';

const RegistersContainer = styled.div`
    background: #282c34;
    height: 100%;
    text-align: left;
    padding-left: 10px;
    padding-right: 15px;
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
            SP: {toHex(machineContext.state.SP)}
    A: {toHex(machineContext.state.A)}
    X: {toHex(machineContext.state.X)}
    Y: {toHex(machineContext.state.Y)}
    NF: {machineContext.state.NF?"TRUE":"FALSE"}
    VF: {machineContext.state.VF?"TRUE":"FALSE"}
    DF: {machineContext.state.DF?"TRUE":"FALSE"}
    IF: {machineContext.state.IF?"TRUE":"FALSE"}
    ZF: {machineContext.state.ZF?"TRUE":"FALSE"}
    CF: {machineContext.state.CF?"TRUE":"FALSE"}
    NMI: {machineContext.state.NMI?"TRUE":"FALSE"}
    IRQ: {machineContext.state.IRQ?"TRUE":"FALSE"}
        </RegistersContainer>
    );
}

export default Registers;