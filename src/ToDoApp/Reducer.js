let newId = 0;
export const Reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state,
            {
                id: newId++,
                text: action.text,
                complete: false
            }
            ]
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.id)

        case 'EDIT_TASK':
            state.map((task) => {
                if (task.id === action.id)
                    task.text = action.text
            })
            return [...state]

        case 'COMPLETE_TASK':
            state.map((task) => {
                if (task.id === action.id)
                    task.complete = action.value
            })
            return [...state]

        default:
            return state
    }
}