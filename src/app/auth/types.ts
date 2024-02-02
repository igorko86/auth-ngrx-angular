import {IBackendErrors} from '../shared/types/backendErrors.inreface'
import {IUser} from '../shared/types/user.interface'

export type RegisterDTO = {
  user: {
    username: string
    email: string
    password: string
    roleId: number
  }
}

export type AuthState = {
  isSubmitting: boolean
  errors: IBackendErrors | null
  user: IUser | null
}
