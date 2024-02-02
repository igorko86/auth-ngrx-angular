import {AuthState} from '../types'
import {createSelector} from '@ngrx/store'

export const selectFeature = (state: {auth: AuthState}) => state.auth

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting,
)
