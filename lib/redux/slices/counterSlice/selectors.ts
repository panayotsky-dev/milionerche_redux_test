/* Instruments */
import type { ReduxState } from '@/lib/redux'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: ReduxState) => state.counter.value

export const selectUserName = (state:ReduxState) => state.counter.userName

export const selectUrl = (state:ReduxState) => state.counter.url
export const selectQuestions = (state:ReduxState) => state.counter.questions
export const selectIsAuth = (state:ReduxState) => state.counter.isAuth
export const test = (action:ReduxState) => action.counter.isAuth
