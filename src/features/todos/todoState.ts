import { Todo } from '../../common/todo.type';

// 状態の定義
export const state = {
    todos: [
        {
            id: 1,
            title: "test1",
            content: "test1の内容",
            isCompleted: false,
        },
        {
            id: 2,
            title: "test2",
            content: "test2の内容",
            isCompleted: false,
        }
    ] as Todo[]
}