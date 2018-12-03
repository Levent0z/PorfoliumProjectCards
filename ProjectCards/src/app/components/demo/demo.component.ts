import { Component, OnInit } from '@angular/core';
import { SortOrder } from '../../enums/sortOrder';
import Constants from '../../constants';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  isLoading: boolean;
  sortOrder: SortOrder = Constants.defaultSortOrder;
  
  readonly sortOrders: SelectItem[] = [
    { label: 'Comments', value: SortOrder.Comments, icon: 'fas fa-comments' },
    { label: 'Likes', value: SortOrder.Likes, icon: 'fas fa-heart' },
    { label: 'Popular', value: SortOrder.Popular, icon: 'fas fa-fire' },
    { label: 'Recent', value: SortOrder.Recent, icon: 'fas fa-history' },
    { label: 'Views', value: SortOrder.Views, icon: 'fas fa-eye' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
