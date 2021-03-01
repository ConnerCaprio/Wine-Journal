import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietalSeperatorComponent } from './varietal-seperator.component';

describe('VarietalSeperatorComponent', () => {
  let component: VarietalSeperatorComponent;
  let fixture: ComponentFixture<VarietalSeperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietalSeperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietalSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
