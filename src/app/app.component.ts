import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'wine-journal-app';
  selected = 'all';
  addWine = false;
  sort = '';
  varietalSort = '';
  upIcon = faArrowUp;
  downIcon = faArrowDown;
  varieties: string[] = [];
  allVarieties = [
    'Pinot Noir',
    'Cabernet Sauvignon',
    'Zinfandel',
    'Blend',
    'Tempranillo',
    'Malbec',
    'Syrah',
    'Riesling',
    'Merlot',
    'Chianti',
    'Rose',
    'Moscato',
    'Roscato',
    'Chardonnay',
    'Pinot Grigio',
    'Pinot Gris',
    'Other'
  ];
  whiteVarieties = [
    'Zinfandel',
    'Blend',
    'Riesling',
    'Moscato',
    'Chardonnay',
    'Pinot Grigio',
    'Pinot Gris',
    'Other'
  ];
  redVarieties = [
    'Pinot Noir',
    'Cabernet Sauvignon',
    'Zinfandel',
    'Blend',
    'Tempranillo',
    'Malbec',
    'Syrah',
    'Merlot',
    'Chianti',
    'Roscato',
    'Other'
  ];
  sparklingVarieties = [
    'Rose',
    'Other'
  ]

  constructor() { }

  ngOnInit(): void {
    this.varieties = this.allVarieties;
  }

  onAddClicked() {
    this.addWine = true;
  }

  onRedClicked() {
    this.selected = 'red';
    this.varieties = this.redVarieties;
  }

  onWhiteClicked() {
    this.selected = 'white';
    this.varieties = this.whiteVarieties;
  }

  onSparklingClicked() {
    this.selected = 'sparkling';
    this.varieties = this.sparklingVarieties;
  }

  onAllClicked() {
    this.selected = 'all';
    this.varieties = this.allVarieties;
  }

  sortChange($event: MatRadioChange): void {
    this.sort = $event.value;
  }

  varietalSortChange($event: MatRadioChange): void {
    this.varietalSort = $event.value;
  }

}
