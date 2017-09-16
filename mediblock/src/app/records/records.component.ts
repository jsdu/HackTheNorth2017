import { Component, OnInit } from '@angular/core';
import {consoleTestResultsHandler} from "tslint/lib/test";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.less']
})
export class RecordsComponent implements OnInit {
  records: Object[] = [];
  constructor() { }

  ngOnInit() {
    this.records = [
      {id: 1, cat: 'control', name: 'Annual eyesight control', date: '18/08/2017',
        time: '14:22', place: 'St.Mary Clinic, London'},
      {id: 2, cat: 'illness', name: 'Hay Fever', date: '24/05/2017',
        time: '09:56', place: 'GP / High Street, London'},
      {id: 3, cat: 'vaccine', name: 'MIT Vaccination', date: '09/04/2017',
        time: '12:00', place: 'GP / High Street, London'}
    ];
    console.log(this.records);
  }

}
