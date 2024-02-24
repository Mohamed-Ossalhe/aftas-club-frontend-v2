import {createActionGroup, emptyProps, props} from "@ngrx/store";

const SOURCE = "Auth Api"

export const authApiActions = createActionGroup({
  source: SOURCE,
  events: {
    registerSuccess: props,
    registerFailure: props,
    loginSuccess: props,
    loginFailure: props,
    logoutSuccess: emptyProps(),
    logoutFailure: props
  }
})
