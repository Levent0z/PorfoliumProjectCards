import { Component, OnInit } from '@angular/core';
import Entry from 'src/app/models/entry';
import Constants from 'src/app/constants';
import { PortfoliumApiService } from 'src/app/services/portfoliumApi';
import LoggerService from 'src/app/services/logger';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent implements OnInit {

  readonly pageSize: number = Constants.maxPageSize;
  readonly scrollDistance: number = 4;  // bottom 40% of the page to scroll
  readonly scrollThrottle: number = 100;  // milliseconds delay after scrolling
  

  height: number = 700;
  cachedEntries: Entry[];

  constructor(private api: PortfoliumApiService, private log: LoggerService) { }

  async ngOnInit() {
    this.cachedEntries = await this.getEntries(0, this.pageSize);
  }

  private async getEntries(first: number, rows: number): Promise<Entry[]> {
    this.log.info(`Loading entries ${first} through ${first + rows - 1}`);
    return (await this.api.expertEntries(first, rows)).filter(entry => entry.visibility);
  }

  async onScrollDown (ev) {
    this.log.info(`Scroll down. ${JSON.stringify(ev)}`);   

    const entries: Entry[] = await this.getEntries(this.cachedEntries.length, this.pageSize);
    this.cachedEntries = [...this.cachedEntries, ...entries];
  }
}
