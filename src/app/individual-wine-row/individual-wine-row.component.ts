import { Component, Input, OnInit } from '@angular/core';
import { WinesService } from './../wine_schema/wine.service';
import { Wine } from './../wine_schema/wine.model';


@Component({
  selector: 'app-individual-wine-row',
  templateUrl: './individual-wine-row.component.html',
  styleUrls: ['./individual-wine-row.component.css']
})
export class IndividualWineRowComponent implements OnInit {

  wines: Wine[] = [];

  constructor(public winesService: WinesService) { }

  ngOnInit(): void {
    this.winesService.getWines();
    this.winesService.getWineUpdateListener()
      .subscribe((wines: Wine[]) => {
        this.wines = wines;
      });
  }

  year = 2017;
  rating = 69;
  terroir = 'Cali';
  varietal = 'blend';
  price = 25;
  alcPercent = 12;
  notes = 'Twas good the night before christmas';




}
