import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  cachedEntries: Entry[];

  @Output()
  public readonly isLoadingChange = new EventEmitter<boolean>();

  private _isLoading: boolean;
  public get isLoading(): boolean {
    return this._isLoading;
  }
  private setIsLoading(value: boolean) {
    if (this._isLoading !== value) {
      this._isLoading = value;
      this.isLoadingChange.emit(value);
    }
  }

  constructor(private api: PortfoliumApiService, private log: LoggerService) { }

  async ngOnInit() {
    this.setIsLoading(true);
    try {
      this.cachedEntries = await this.getEntries(0, this.pageSize);
    }
    finally {
      this.setIsLoading(false);
    }
  }

  private async getEntries(first: number, rows: number): Promise<Entry[]> {
    this.log.info(`Loading entries ${first} through ${first + rows - 1}`);
    return (await this.api.expertEntries(first, rows)).filter(entry => entry.visibility);
  }

  async onScrollDown(ev) {
    this.log.info(`Scroll down. ${JSON.stringify(ev)}`);

    if (!this.isLoading) {
      this.setIsLoading(true);
      try {
        const entries: Entry[] = await this.getEntries(this.cachedEntries.length, this.pageSize);
        this.cachedEntries = [...this.cachedEntries, ...entries];
      }
      finally {
        this.setIsLoading(false);
      }
    }
  }
}
