import { Component, Input, OnInit } from '@angular/core';
import { WinesService } from './../wine_schema/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  @Input()
  public selected = '';

  @Input()
  public sort = '';

  constructor(public winesService: WinesService) { }


  ngOnInit(): void {
    this.winesService.getWines();
  }

}
