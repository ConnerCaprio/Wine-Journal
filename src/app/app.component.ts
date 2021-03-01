import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'wine-journal-app';
  isActiveRed = true;
  isActiveWhite = false;
  isActiveSparkling = false;

  constructor() { }

  ngOnInit(): void {

  }

  onAddClicked() {
    alert('Clicked add');
  }
}
