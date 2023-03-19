import {CanActivate, ExecutionContext, Inject, Injectable} from '@nestjs/common';
import {map, Observable, of} from 'rxjs';
import {AuthGuard} from "interfaces";

@Injectable()
export class AccessTokenGuard implements CanActivate, AuthGuard {
  constructor() {
    console.log('Bruh moment')
  }

  canActivate(context: ExecutionContext): Observable<boolean> {
    return of(Math.random() > 0.5);
  }
}

