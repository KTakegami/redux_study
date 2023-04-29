import { legacy_createStore as createStore } from 'redux'
import { todoReducer } from '../features/todos/todoReducer'

export const store = createStore(todoReducer)