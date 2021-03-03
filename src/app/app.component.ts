import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'wine-journal-app';
  public isActiveRed = true;
  isActiveWhite = false;
  isActiveSparkling = false;
  addWine = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked() {
    this.addWine = true;
  }

  onHideClicked() {
    this.addWine = false;
  }

  onRedClicked() {
    this.isActiveRed = true;
    this.isActiveSparkling = false;
    this.isActiveWhite = false;
  }

  onWhiteClicked() {
    this.isActiveRed = false;
    this.isActiveSparkling = false;
    this.isActiveWhite = true;
  }

  onSparklingClicked() {
    this.isActiveRed = false;
    this.isActiveSparkling = true;
    this.isActiveWhite = false;
  }

}
