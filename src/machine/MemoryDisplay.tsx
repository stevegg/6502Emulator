import React, { FC, ReactElement, useContext } from 'react';
import MachineContext from '../MachineContext';
import HexEditor from 'react-hex-editor';
import oneDarkPro from 'react-hex-editor/themes/oneDarkPro';



const MemoryDisplay:FC = ():ReactElement => {
    const machineContext = useContext(MachineContext);
    
    return (
        <div style={{ height: '100%'}}>
            <div>{`PC: ${machineContext?.state?.PC}`}</div>
            <HexEditor 
                height={800}
                columns={0x10}
                showAscii
                showRowLabels
                offset={0x100}
                data={machineContext.memory} 
                theme={{ hexEditor: oneDarkPro }} />
        </div>
    );
};

export default MemoryDisplay;