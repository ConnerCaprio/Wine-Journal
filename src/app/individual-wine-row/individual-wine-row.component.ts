import { Component, Input, OnInit } from '@angular/core';
import { WinesService } from './../wine_schema/wine.service';
import { Wine } from './../wine_schema/wine.model';
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-individual-wine-row',
  templateUrl: './individual-wine-row.component.html',
  styleUrls: ['./individual-wine-row.component.css']
})
export class IndividualWineRowComponent implements OnInit {

  wines: Wine[] = [];
  currentVariety = 0;

  constructor(public winesService: WinesService, public appComponent: AppComponent) { }

  ngOnInit(): void {
    //this.winesService.getWines();
    /*this.winesService.getWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
      });
      */
     if (this.currentVariety == 0) {
      this.winesService.getWines();
      this.winesService.getWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
      });
     }
    else if (this.currentVariety == 1) {
      this.winesService.getRedWines();
      this.winesService.getRedWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
      });
    }
    else if (this.currentVariety == 2) {
      this.winesService.getWhiteWines();
      this.winesService.getWhiteWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
      });
    }
    else {
      this.winesService.getSparklingWines();
      this.winesService.getSparklingWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
      });
    }
  }
}
