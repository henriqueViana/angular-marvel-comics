import { createReducer, on } from "@ngrx/store"
import { add } from './actions'
import { ComicsDTO } from '../../dto/ComicsDTO'

const INITIAL_STATE = {}
  
export const reducer = createReducer(
  INITIAL_STATE,
  on(add, (state, { payload }) => ({
    ...state, ...payload
  }))
)