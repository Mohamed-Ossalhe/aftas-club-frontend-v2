import {createFeature, createReducer, on} from "@ngrx/store";
import {authStateInterface} from "../../interfaces/auth-state-interface";
import {authPageActions} from "./actions/auth-page.actions";
import {authApiActions} from "./actions/auth-api.actions";

const AUTH_FEATURE_KEY: string = "Auth";

const initialState: authStateInterface = {
  authentication: null,
  i18n: null,
  _persist: null,
  submitting: false,
  loading: false
}

const authFeature = createFeature({
  name: AUTH_FEATURE_KEY,
  reducer: createReducer(
    initialState,
    on(authPageActions.login, state => ({
      ...state,
      submitting: true,
      loading: true
    })),
    on(authApiActions.loginSuccess, (state, action) => ({
      ...state,
      submitting: false,
      loading: false
    })),
    on(authApiActions.loginFailure, (state, action) => ({
      ...state,
      submitting: false,
      loading: false
    }))
  )
})


export const {
  name: authFeatureKey,
  reducer: authFeatureReducer,
  selectAuthentication,
  selectI18n,
  select_persist,
  selectSubmitting,
  selectLoading
} = authFeature;
