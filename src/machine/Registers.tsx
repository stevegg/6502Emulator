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
const RegisterItem = styled.div``

const Registers:FC = ():ReactElement => {
    const machineContext = useContext(MachineContext);

    const toHex = (value: number, length: number = 4): string => {
        const padValues = '00000000'.substring(0, length);
        return '0x' + (padValues + value.toString(16).toUpperCase()).slice(-4); //009A
    }

    return (
        <RegistersContainer>
            <RegisterItem>PC: {toHex(machineContext.state.PC)}</RegisterItem>
            <RegisterItem>SP: {toHex(machineContext.state.SP)}</RegisterItem>
            <RegisterItem>A: {toHex(machineContext.state.A)}</RegisterItem>
            <RegisterItem>X: {toHex(machineContext.state.X)}</RegisterItem>
            <RegisterItem>Y: {toHex(machineContext.state.Y)}</RegisterItem>
            <RegisterItem>NF: {machineContext.state.NF?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>VF: {machineContext.state.VF?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>DF: {machineContext.state.DF?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>IF: {machineContext.state.IF?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>ZF: {machineContext.state.ZF?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>CF: {machineContext.state.CF?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>NMI: {machineContext.state.NMI?"TRUE":"FALSE"}</RegisterItem>
            <RegisterItem>IRQ: {machineContext.state.IRQ?"TRUE":"FALSE"}</RegisterItem>
        </RegistersContainer>
    );
}

export default Registers;