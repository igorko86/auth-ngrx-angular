import * as AuthFeature from '../auth/store/reducers'

export const state = {
  [AuthFeature.name]: AuthFeature.reducer,
}
