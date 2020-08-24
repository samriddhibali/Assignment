export const addTask = text => ({
    type: 'ADD_TASK',
    text
})

export const deleteTask = id => ({
    type: 'DELETE_TASK',
    id
})

export const editTask = (id, text) => ({
    type: 'EDIT_TASK',
    id,
    text
})

export const completeTask = (id, value) => ({
    type: 'COMPLETE_TASK',
    id,
    value
})