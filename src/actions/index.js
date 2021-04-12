export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEMORY_RECORD = 'MEMORY_RECORD';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const MEMORY_RECALL = 'MEMORY_RECALL';


export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return ({
        type:CLEAR_DISPLAY
    })
}

export const recordMemory = () => {
    return ({
        type:MEMORY_RECORD
    })
}

export const clearMemory = () => {
    return ({
        type:MEMORY_CLEAR
    })
}

export const recallMemory = () => {
    return ({
        type:MEMORY_RECALL,
    })
}

