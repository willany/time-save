import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
import { Entry } from '../shared/entry';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-time-save',
  providers: [EntryService],
  templateUrl: './time-save.component.html',
  styleUrls: ['./time-save.component.css']
})
export class TimeSaveComponent implements OnInit {

  constructor(
    private entryService: EntryService
  ) { }

  entries: any;
  @Input() public userId: number;
  @Input() entryInput: Entry;

  entry: Entry = new Entry();
  submitted = false;

  ngOnInit() {
    this.getEntriesList(this.userId);
  }

  getEntriesList(userId) {
    this.entries = this.entryService.getEntriesList(userId).snapshotChanges().pipe(map(actions => {
          return actions.map(action => ({
              date: action.key,
              value: action.payload.val(),
          }));
      }));
  }

  deleteEntries() {
    this.entryService.deleteAll();
  }

  newEntry(): void {
    this.submitted = false;
    this.entry = new Entry();
  }

  save() {
    this.entryService.createEntry(this.entry);
    this.entry = new Entry();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  onEdit(entry: any) {

    console.log(entry);
  }

  public addNewLine() {
    const table_body = document.getElementById('table-body');
    const first_row = document.getElementById('first-tr');
    const clone = first_row.cloneNode(true);
    this.cleanUpInputs(clone);
    table_body.appendChild(clone);
  }

  public deleteLine(line: any) {
    this.entryService.deleteEntry(line);
  }

  public cleanUpInputs(obj) {
    let n ;
    for (let i = 0; n = obj.childNodes[i]; ++i) {
        if (n.childNodes && n.tagName !== 'INPUT') {
            this.cleanUpInputs(n);
        } else if (n.tagName === 'INPUT' && n.type === 'text') {
            n.value = '';
        }
    }
  }


}
