import { Component, OnInit, Input } from '@angular/core';
import Entry from 'src/app/models/entry';
import Constants from 'src/app/constants';
import { PortfoliumApiService } from 'src/app/services/portfoliumApi';
import { LazyLoadEvent } from 'primeng/components/common/api';
import LoggerService from 'src/app/services/logger';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent implements OnInit {

  readonly pageSize: number = Constants.maxPageSize;

  @Input()
  entries: Entry[];

  constructor(private api: PortfoliumApiService, private log: LoggerService) { }

  async ngOnInit() {
    this.entries = await this.getEntries(0, this.pageSize);
  }
  private async getEntries(first: number, rows: number): Promise<Entry[]> {
    this.log.info(`Loading entries ${first} through ${first + rows - 1}`);
    return (await this.api.expertEntries(first, rows)); //.filter(entry => entry.visibility);
  }

  async lazyLoadEntries(event: LazyLoadEvent) {
    this.entries = await this.getEntries(event.first, event.rows);
  }
}
