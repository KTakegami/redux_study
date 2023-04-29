import { state as initialState } from "./todoState";

// Actionを受けて、状態を変更する役割
export const todoReducer = (state = initialState , action: any) => {
    switch (action.type) {
        case "ADD":
                return {todos: [...state.todos, action.payload]}
        case "REMOVE":
                return {todos: state.todos.filter((todo) => todo.id !== action.payload)}
        case "TOGGLE_COMPLETE":
                return {todos: state.todos.map((todo)=> {
                        if (todo.id !== action.payload) return todo;

                        return {...todo, isCompleted: !todo.isCompleted}
                })}
        default:
            return state
    }
}