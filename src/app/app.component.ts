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
  selected = '';
  addWine = false;
  sort = '';
  upIcon = faArrowUp;
  downIcon = faArrowDown;

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

  varietalSort($event: MatRadioChange): void {
    this.sort = $event.value;
  }

}
