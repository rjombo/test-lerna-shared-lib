import {CanActivate, ExecutionContext, Inject, Injectable} from '@nestjs/common';
import {map, Observable, of} from 'rxjs';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor() {
    console.log('AccessTokenGuard')
  }

  canActivate(context: ExecutionContext): Observable<boolean> {
    return of(Math.random() > 0.5);
  }
}

