import React, { FC, ReactElement, useContext, useState } from 'react';
import MachineContext from '../MachineContext';
import HexEditor from 'react-hex-editor';
import oneDarkPro from 'react-hex-editor/themes/oneDarkPro';

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
        <div style={{ height: '100%'}}>
            <div>{`PC: ${machineContext?.state?.PC}`}</div>
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
        </div>
    );
};

export default MemoryDisplay;