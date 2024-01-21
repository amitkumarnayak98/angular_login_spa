import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const data: any = sessionStorage.getItem('signUpObject');
    const userInfo: Array<any> =
      data === null || data === undefined || data === ''
        ? []
        : [JSON.parse(data)];
    if (userInfo?.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
