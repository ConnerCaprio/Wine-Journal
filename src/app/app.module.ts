import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualWineRowComponent } from './individual-wine-row/individual-wine-row.component';
import { VarietalSeperatorComponent } from './varietal-seperator/varietal-seperator.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineAddComponent } from './wine-add/wine-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndividualWineRowComponent,
    VarietalSeperatorComponent,
    WineListComponent,
    WineAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
