import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterDTO} from '../types'
import {IUser} from '../../shared/types/user.interface'
import {IBackendErrors} from '../../shared/types/backendErrors.inreface'

const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<RegisterDTO>(),
    RegisterSuccess: props<{user: IUser}>(),
    RegisterFail: props<{errors: IBackendErrors}>(),
  },
})
// const register = createAction('[auth] register', props<RegisterDTO>())
// const registerSuccess = createAction(
//   '[auth] register success',
//   props<RegisterDTO>(),
// )
// const registerFail = createAction('[auth] register fail', props<RegisterDTO>())
const reset = createAction('[auth] reset')

export {reset, authActions}
