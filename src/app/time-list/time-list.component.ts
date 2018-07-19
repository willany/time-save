import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../shared/entry';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {
@Input() entries: Array<Entry>;
  constructor(private entryService: EntryService) { }

  ngOnInit() {

  }

  public deleteLine(line: any) {
    this.entryService.deleteEntry(line);
  }

}
