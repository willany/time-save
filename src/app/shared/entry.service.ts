import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entry } from './entry';
import { Identity } from './identity';

@Injectable()
export class EntryService {

  constructor(private db: AngularFireDatabase) {
  }

  listEntriesByUserId(userId: number): any {
    return this.db.list('/1234').snapshotChanges()
      .pipe(map(actions => {
          return actions.map(action => ({
              data: action.key,
              value: action.payload.val(),
          }));
      }));
  }

}
