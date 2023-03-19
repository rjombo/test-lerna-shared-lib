import {ExecutionContext} from "@nestjs/common";
import {Observable} from "rxjs";

export interface AuthGuard {
canActivate(context: ExecutionContext): Observable<boolean>;
}
