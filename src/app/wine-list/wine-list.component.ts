import { Component, OnInit } from '@angular/core';
import { WinesService } from './../wine_schema/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  constructor(public winesService: WinesService) { }

  wines = [{
    Name: 'Rubus',
    Id: '1'
  }];

  ngOnInit(): void {
    this.winesService.getWines();
  }

}
