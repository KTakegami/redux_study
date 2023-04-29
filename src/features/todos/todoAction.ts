// ActionCreatorの役割
import { Todo } from '../../common/todo.type';

//Todoの追加
export const addTodoAction = (nextTodo: Todo) => {
    return {
        type: "ADD",
        payload: nextTodo
    }
}

//Todoの変更
export const toggleCompleteAction = (id: number) => {
    return {
        type: "TOGGLE_COMPLETE",
        payload: id
    }
}

//Todoの削除
export const removeTodoAction = (id: number) => {
    return {
        type: "REMOVE",
        payload: id
    }
}