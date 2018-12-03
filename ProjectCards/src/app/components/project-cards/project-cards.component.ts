import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import Entry from '../../models/entry';
import Constants from '../../constants';
import { PortfoliumApiService } from '../../services/portfoliumApi';
import LoggerService from '../../services/logger';
import { SortOrder } from '../../enums/sortOrder';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent implements OnInit, OnChanges {

  @Input()
  pageSize: number = Constants.maxPageSize;

  @Input()
  cardHeight: number = Constants.cardHeight;

  @Input()
  loadThreshold: number = Constants.loadThreshold;

  @Input()
  sortOrder: SortOrder = Constants.defaultSortOrder;

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

  private async initLoad() {
    this.setIsLoading(true);
    try {
      this.cachedEntries = await this.getEntries(0, this.pageSize);
    }
    finally {
      this.setIsLoading(false);
    }
  }

  ngOnInit() {
    this.initLoad();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortOrder || changes.pageSize) {
      this.initLoad();
    }
  }

  private async getEntries(first: number, rows: number): Promise<Entry[]> {
    this.log.info(`Loading entries ${first} through ${first + rows - 1}`);
    return (await this.api.expertEntries(first, rows, this.sortOrder)).filter(entry => entry.visibility);
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

  onScrolledIndexChange(event) {
    // Note: load threshold is currently expressed as the difference between the indexes of the bottom of the list and the top entry in the view port.
    // A possible improvement is to (somehow) retrieve the virtual scroll position and based on a percentage expressed by the load threshold, call onScrollDown.

    if (this.cachedEntries && event >= this.cachedEntries.length - this.loadThreshold) {
      this.onScrollDown(event);
    }
  }
}
