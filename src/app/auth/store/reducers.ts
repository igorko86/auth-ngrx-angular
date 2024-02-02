import {createFeature, createReducer, on} from '@ngrx/store'
import {AuthState} from '../types'
import {authActions} from './actions'

const initialState: AuthState = {
  isSubmitting: false,
  errors: null,
  user: null,
}

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      errors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      user: action.user,
    })),
    on(authActions.registerFail, (state, action) => ({
      ...state,
      isSubmitting: false,
      errors: action.errors,
    })),
  ),
})

export const {name, reducer, selectIsSubmitting, selectErrors} = authFeature
