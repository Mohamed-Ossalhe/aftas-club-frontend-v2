import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";
import {LocalStorageService} from "../local-storage-service/local-storage.service";
import {Store} from "@ngrx/store";
import {selectUser} from "../../../core/store/auth/auth.reducer";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private store: Store) { }

  getToken() {
    const authenticationState = this.store.selectSignal(selectUser);
    return authenticationState() ?? authenticationState()?.token;
  }

  getRefreshToken() {
    const authenticationState = this.store.selectSignal(selectUser);
    return authenticationState() ?? authenticationState()?.refreshToken;
  }

  getUsername() {
    const authenticationState = this.store.selectSignal(selectUser);
    return authenticationState() ?? authenticationState()?.username;
  }

  getRole(){
    const authenticationState = this.store.selectSignal(selectUser);
    return authenticationState() ?? authenticationState()?.role;
  }

  decodeJwt(token: any) {
    return jwtDecode(token);
  }
}
