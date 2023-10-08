import React, { FC, ReactElement, useContext, useState } from 'react';
import MachineContext from '../MachineContext';
import HexEditor from 'react-hex-editor';
import oneDarkPro from 'react-hex-editor/themes/oneDarkPro';
import styled from 'styled-components';

const MemoryContainer = styled.div`
    height: 100%;
`

const MemoryDisplay:FC = ():ReactElement => {
    const machineContext = useContext(MachineContext);
    const data = machineContext.memory.subarray(machineContext.state.PC);
    const [nonce, setNonce] = useState(0);
    
    // The callback facilitates updates to the source data.
    const handleSetValue = React.useCallback((offset:number, value:number) => {
        data[offset] = value;
        setNonce(v => (v + 1));
    }, [data]);

    return (
        <MemoryContainer>
            <HexEditor 
                height={800}
                columns={0x10}
                showAscii
                showRowLabels
                offset={0x100}
                data={data} 
                nonce={nonce}
                onSetValue={handleSetValue}
                theme={{ hexEditor: oneDarkPro }} />
        </MemoryContainer>
    );
};

export default MemoryDisplay;