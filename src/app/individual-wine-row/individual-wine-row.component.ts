import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { WinesService } from './../wine_schema/wine.service';
import { Wine } from './../wine_schema/wine.model';
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-individual-wine-row',
  templateUrl: './individual-wine-row.component.html',
  styleUrls: ['./individual-wine-row.component.css']
})
export class IndividualWineRowComponent implements OnInit {

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

  wines: Wine[] = [];
  selected = '';
  sort = '';

  constructor(
    public cdRef: ChangeDetectorRef,
    public winesService: WinesService,
    public appComponent: AppComponent) { }

  ngOnInit(): void {
    this.updateWines();
  }

  public updateWines(): void {
    if (this.selected === 'red') {
      this.winesService.getRedWines();
      this.winesService.getRedWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.cdRef.detectChanges();
      });
    } else if (this.selected === 'white') {
      this.winesService.getWhiteWines();
      this.winesService.getWhiteWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.cdRef.detectChanges();
      });
    } else if (this.selected === 'sparkling') {
      this.winesService.getSparklingWines();
      this.winesService.getSparklingWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.cdRef.detectChanges();
      });
    } else {
      this.winesService.getWines();
      this.winesService.getWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
        this.cdRef.detectChanges();
      });
    }
  }

  public sortWines(): void {
    if (this.sort === 'A-Z' || this.sort === 'Z-A') {
      this.wines.sort((a, b) => {
        if(a.variety === '' || a.variety === null || a.variety === undefined) return 1;
        if(b.variety === '' || b.variety === null || b.variety === undefined) return -1;
        if(a.variety === b.variety) return 0;
        if (this.sort === 'A-Z') {
          return a.variety < b.variety ? -1 : 1;
        } else {
          return a.variety > b.variety ? -1 : 1;
        }
    });
    } else if (this.sort === 'Rating Down') {
      this.wines.sort((a, b) => (a.rating < b.rating) ? 1 : (a.rating === b.rating) ?  1 : -1 );
    } else if (this.sort === 'Rating Up') {
      this.wines.sort((a, b) => (a.rating > b.rating) ? 1 : (a.rating === b.rating) ?  1 : -1 );
    }
  }
}
