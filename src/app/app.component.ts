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
  upIcon = faArrowUp;
  downIcon = faArrowDown;
  varieties = [
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
    'Pinot Grie'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked() {
    this.addWine = true;
  }

  onRedClicked() {
    this.selected = 'red';
  }

  onWhiteClicked() {
    this.selected = 'white';
  }

  onSparklingClicked() {
    this.selected = 'sparkling';
  }

  onAllClicked() {
    this.selected = 'all';
  }

  varietalSort($event: MatRadioChange): void {
    this.sort = $event.value;
  }

}
