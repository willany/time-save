import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-save',
  templateUrl: './time-save.component.html',
  styleUrls: ['./time-save.component.css']
})
export class TimeSaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addNewLine() {
  	const table_body = document.getElementById('table-body');
  	const first_row = document.getElementById("first-tr");
	let clone = first_row.cloneNode(true);
	(<HTMLTableElement>clone).id = "";
	table_body.appendChild(clone);
  }

}
