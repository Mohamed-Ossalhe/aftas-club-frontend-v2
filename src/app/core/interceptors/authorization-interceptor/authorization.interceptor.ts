import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectUser} from "../../store/auth/auth.reducer";
import {JwtService} from "../../../shared/services/jwt-service/jwt.service";

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(JwtService).getToken();

  if (req.url.includes("auth")) return next(req);

  const newReq = req.clone({
    headers: req.headers.set('Authorization', token as string),
  });
  return next(newReq);
};
