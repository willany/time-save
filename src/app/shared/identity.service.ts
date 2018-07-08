import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { map, filter, switchMap, takeWhile } from 'rxjs/operators';
import { Identity } from './identity';

@Injectable()
export class IdentityService {
    private _$identity: BehaviorSubject<Identity | null> = new BehaviorSubject(null);

    public get $identity(): Observable<Identity> {
        return this._$identity as Observable<Identity>;
    }

    public setIdentity(identity: Identity | null) {
        this._$identity.next(identity);
    }
}
