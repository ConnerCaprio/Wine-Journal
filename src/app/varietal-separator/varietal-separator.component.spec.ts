import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietalSeparatorComponent } from './varietal-separator.component';

describe('VarietalSeparatorComponent', () => {
  let component: VarietalSeparatorComponent;
  let fixture: ComponentFixture<VarietalSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietalSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietalSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
