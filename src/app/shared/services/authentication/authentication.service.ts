import { Injectable } from '@angular/core';
import {AbstractService} from "../abstract.service";
import {User} from "../../../core/models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AbstractService<User>{
  constructor() {
    super();
  }
}
