import { store } from "../app/store"

// 管理している全てのStateのタイプを定義
export type RootState = ReturnType<typeof store.getState>