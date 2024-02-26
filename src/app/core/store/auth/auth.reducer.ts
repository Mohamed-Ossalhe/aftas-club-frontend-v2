import {createFeature, createReducer, on} from "@ngrx/store";
import {authStateInterface} from "../../interfaces/auth-state-interface";
import {authPageActions} from "./actions/auth-page.actions";
import {authApiActions} from "./actions/auth-api.actions";

const AUTH_FEATURE_KEY: string = "Auth";

const initialState: authStateInterface = {
  user: null,
  errors: {},
  isLoading: false,
  isSubmitting: false,
  isLoggedIn: false
}

const authFeature = createFeature({
  name: AUTH_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(authPageActions.login, state => ({
      ...state,
      isSubmitting: true,
      isLoading: true
    })),
    on(authApiActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      isLoggedIn: true,
      user: action.response
    })),
    on(authApiActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      isLoggedIn: false
    }))
  )
})


export const {
  name: authFeatureKey,
  reducer: authFeatureReducer,
  selectUser,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsSubmitting,
  selectErrors
} = authFeature;
