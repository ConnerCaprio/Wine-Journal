import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { WinesService } from './../wine_schema/wine.service';
import { Wine } from './../wine_schema/wine.model';
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-individual-wine-row',
  templateUrl: './individual-wine-row.component.html',
  styleUrls: ['./individual-wine-row.component.css']
})
export class IndividualWineRowComponent implements OnInit {

  @Input()
  public wine: Wine = {} as Wine;

  constructor(
    public cdRef: ChangeDetectorRef,
    public winesService: WinesService,
    public appComponent: AppComponent) { }

  ngOnInit(): void {
  }
}
