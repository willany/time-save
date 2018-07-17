import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database';
import { QueryFn } from 'angularfire2/database/interfaces';
import { Entry } from './entry';

@Injectable()
export class EntryService {

  userId: number;
  entries: AngularFireList<Entry> = null;

  constructor(private db: AngularFireDatabase) {    
  }

  createEntry(entry: Entry): void {
    console.log(entry);
    this.entries.push(entry);
  }

  updateEntry(key: string, value: any): void {
    this.entries.update(key, value).catch(error => this.handleError(error));
  }

  deleteEntry(key: string): void {
    this.entries.remove(key).catch(error => this.handleError(error));
  }

  getEntriesList(userId): AngularFireList<Entry> {
    this.entries = this.db.list('/' + userId);
    return this.entries;
  }

  deleteAll(): void {
    this.entries.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
