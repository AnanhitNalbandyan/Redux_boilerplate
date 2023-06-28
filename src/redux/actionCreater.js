
export const descrease = () => {
    return {
        type: 'DECREASE'
    }
}

export const inscrease = () => {
    return {
    
        type: 'INCREASE'
    }
}

export const changeByValue = (value) => {
    return {
        type: 'CHANGE',
        payload: value,
    }
}

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: text,
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id,
})