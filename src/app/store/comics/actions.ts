import { Action, createAction, props, createReducer, on } from '@ngrx/store'

enum ActionTypes {
  Add = 'Add',
  Clean = 'Clean'
}

export const add = createAction(ActionTypes.Add, props<{payload: any}>())