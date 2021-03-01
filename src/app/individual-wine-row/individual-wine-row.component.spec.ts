import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualWineRowComponent } from './individual-wine-row.component';

describe('IndividualWineRowComponent', () => {
  let component: IndividualWineRowComponent;
  let fixture: ComponentFixture<IndividualWineRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualWineRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualWineRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
