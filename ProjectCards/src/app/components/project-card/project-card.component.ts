import { Component, OnInit, Input } from '@angular/core';
import Entry from '../../models/entry';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  public entry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
