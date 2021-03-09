import { Component, Input, OnInit } from '@angular/core';
import { Wine } from '../wine_schema/wine.model';
import { WinesService } from './../wine_schema/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  @Input()
  public set setSelected(selected: string) {
    this.selected = selected;
    this.updateWines();
  }

  @Input()
  public set setSort(sort: string) {
    this.sort = sort;
    this.sortWines();
  }

  @Input()
  public set setVarietalSort(sort: string) {
    this.varietalSort = sort;
    this.sortWines();
  }

  @Input()
  public varieties: string[] = [];
  
  wines: Wine[] = [];
  selected = '';
  sort = '';
  varietalSort = '';
  wineList: Wine[][] = [];

  constructor(public winesService: WinesService) { }


  ngOnInit(): void {
    this.updateWines();
  }

  public updateWines(): void {
    if (this.selected === 'red') {
      this.winesService.getRedWines();
      this.winesService.getRedWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.formatWines(wines);
      });
    } else if (this.selected === 'white') {
      this.winesService.getWhiteWines();
      this.winesService.getWhiteWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.formatWines(wines)
      });
    } else if (this.selected === 'sparkling') {
      this.winesService.getSparklingWines();
      this.winesService.getSparklingWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.formatWines(wines);
      });
    } else {
      this.winesService.getWines();
      this.winesService.getWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.formatWines(wines);
      });
    }
  }

  public sortWines(): void {
    if (this.varietalSort === 'A-Z' || this.varietalSort === 'Z-A') {
      this.varieties.sort((a, b) => {
        if(a === 'Other') return 1;
        if(b === 'Other') return -1;
        if(a === b) return 0;
        if (this.varietalSort === 'A-Z') {
          return a < b ? -1 : 1;
        } else {
          return a > b ? -1 : 1;
        }
      });
      this.formatWines(this.wines);
    }
    
    if (this.sort === 'Rating Down' || this.sort === 'Rating Up') {
      this.wines.sort((a, b) => {
        if(a.rating === b.rating) return 0;
        if (this.sort === 'Rating Up') {
          return a.rating < b.rating ? -1 : 1;
        } else {
          return a.rating > b.rating ? -1 : 1;
        }
      });
      this.formatWines(this.wines);
    } else if (this.sort === 'A-Z' || this.sort === 'Z-A') {
      this.wines.sort((a, b) => {
        if(a.name === b.name) return 0;
        if (this.sort === 'A-Z') {
          return a.name < b.name ? -1 : 1;
        } else {
          return a.name > b.name ? -1 : 1;
        }
      });
      this.formatWines(this.wines);
    }
  }

  public formatWines(wines: Wine[]) {
    const totalList = [];
    for (const variety of this.varieties) {
      const varietyList = [];
      for (const wine of wines) {
        if (variety !== 'Other') {
          if (wine.variety === variety) {
            varietyList.push(wine);
          }
        } else {
          if (wine.variety === undefined || wine.variety === '') {
            varietyList.push(wine);
          }
        }
      }
      if (varietyList.length > 0) {
        totalList.push(varietyList);
      }
    }
    this.wineList = totalList;
  }

}
