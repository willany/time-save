import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { QueryFn } from 'angularfire2/database/interfaces';
import { Entry } from './entry';

@Injectable()
export class EntryService {

  userId: number;
  entries: AngularFireList<any> = null;
  selectedEntry: Entry = new Entry();
  private db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  createEntry(entry: Entry): void {
    this.entries.set(entry.date, {
      start_hour: entry.start_hour,
      end_hour: entry.end_hour
    });
  }

  updateEntry(key: string, value: any): void {
    this.entries.update(key, value).catch(error => this.handleError(error));
  }

  deleteEntry(key: string): void {
    this.entries.remove(key).catch(error => this.handleError(error));
  }

  getEntriesList(userId): AngularFireList<any> {
    this.entries = this.db.list('/1234');
    return this.entries;
  }

  deleteAll(): void {
    this.entries.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
