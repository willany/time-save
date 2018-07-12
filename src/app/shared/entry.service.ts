import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entry } from './entry';
import { Identity } from './identity';

@Injectable()
export class EntryService {

  private basePath = '/1234';
  public entries;

  constructor(private db: AngularFireDatabase) {
    this.entries = this.db.list(this.basePath).snapshotChanges()
            .pipe(map(actions => {
                return actions.map(action => ({
                    data: action.key,
                    value: action.payload.val(),
                }));
            }));
  }

}
