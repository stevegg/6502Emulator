import { createContext } from 'react';
import { MEMORY_SIZE, State } from '6502';

interface Machine {
    memory: Uint8Array;
    state: State;
}

export const MachineContextInit: Machine = {
    memory: new Uint8Array(MEMORY_SIZE),
    state: new State()
}

const MachineContext = createContext<Machine>(MachineContextInit);

export default MachineContext;