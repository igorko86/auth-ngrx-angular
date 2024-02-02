import {Actions, createEffect, ofType} from '@ngrx/effects'
import {inject} from '@angular/core'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {IUser} from '../../shared/types/user.interface'
import {StorageManager} from '../../shared/services/StorageManager'
import {Router} from '@angular/router'

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    storageManager = inject(StorageManager),
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({user}) => {
        return authService.register({user}).pipe(
          map((user: IUser) => {
            storageManager.set('userToken', user.token)
            return authActions.registerSuccess({user})
          }),
          catchError((err) =>
            of(authActions.registerFail({errors: err.error.errors})),
          ),
        )
      }),
    )
  },
  {functional: true},
)

export const redirectEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/')
      }),
    )
  },
  {functional: true, dispatch: false},
)
