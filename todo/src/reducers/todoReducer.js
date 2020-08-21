export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Completed MVP',
        completed: false,
        id:3892987590
    },
    {
        item: 'Push MVP to Github',
        completed: false,
        id: 3892987591
    }
];

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED ="CLEAR_COMPLETED";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, {item: action.payload, completed: false, id: new Date()} ];
        case TOGGLE_COMPLETED:
            return state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                }
            }), [...state];
        case CLEAR_COMPLETED:
            return state.filter( item => item.completed === false);
        default:
            return state;
    }
}