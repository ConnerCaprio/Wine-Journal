import { Component, Input, OnInit } from '@angular/core';
import { Wine } from '../wine_schema/wine.model';

@Component({
  selector: 'app-varietal-separator',
  templateUrl: './varietal-separator.component.html',
  styleUrls: ['./varietal-separator.component.css']
})
export class VarietalSeparatorComponent implements OnInit {

  @Input()
  public set setVarietyList(list: Wine[]) {
    const wine = list[0];
    if (wine) {
      if (wine.variety === undefined || wine.variety === '') {
        this.varietySeparator = 'Other';
      } else {
        this.varietySeparator = wine.variety;
      }
    }
  }

  varietySeparator = '';

  constructor() { }

  ngOnInit(): void {
  }


}
