import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthenticationService} from "../../../shared/services/authentication/authentication.service";
import {authPageActions} from "./actions/auth-page.actions";
import {catchError, concatMap, map, of} from "rxjs";
import {authApiActions} from "./actions/auth-api.actions";

export const login$ = createEffect((
  actions$ = inject(Actions),
  authenticationService = inject(AuthenticationService)
) => {
  return actions$.pipe(
    ofType(authPageActions.login),
    concatMap((action) => {
      return authenticationService.authenticate(action.request).pipe(
        map((response) => {
          return authApiActions.loginSuccess({response: response});
        }),
        catchError((errors) => {
          return of(
            authApiActions.loginFailure({errors: errors})
          )
        })
      )
    })
  )
}, {functional: true})

export const register$ = createEffect((
  actions$ = inject(Actions),
  authenticationService = inject(AuthenticationService)
) => {
  return actions$.pipe(
    ofType(authPageActions.register),
    concatMap((action) => authenticationService.register(action.request).pipe(
      map((response) => {
        return authApiActions.registerSuccess({response: response});
      }),
      catchError((errors) => {
        return of(authApiActions.registerFailure({errors: errors}));
      })
    ))
  )
}, {functional: true})
