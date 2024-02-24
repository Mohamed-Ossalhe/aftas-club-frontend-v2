import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {provideState, StoreModule} from "@ngrx/store";
import {authFeatureKey, authFeatureReducer} from "./auth.reducer";
import {EffectsModule} from "@ngrx/effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, authFeatureReducer),
    EffectsModule.forFeature()
  ]
})
export class AuthStateModule { }
