import {createActionGroup, props} from "@ngrx/store";

const SOURCE = "Auth Page"

export const authPageActions = createActionGroup({
  source: SOURCE,
  events: {
    register: props,
    login: props<{email: string, password: string}>()
  }
})
