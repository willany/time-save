import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    private entrySvc: EntryService
  ) { }

  public entries: FirebaseListObservable<Entry[]>;
  @Input() public userId: number;

  ngOnInit() {
    this.entries = this.entrySvc.listEntriesByUserId(this.userId);
  }

  public addNewLine() {
    const table_body = document.getElementById('table-body');
    const first_row = document.getElementById('first-tr');
    const clone = first_row.cloneNode(true);
    this.cleanUpInputs(clone);
    table_body.appendChild(clone);
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
