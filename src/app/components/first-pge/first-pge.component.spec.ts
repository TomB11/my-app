import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPgeComponent } from './first-pge.component';

describe('FirstPgeComponent', () => {
  let component: FirstPgeComponent;
  let fixture: ComponentFixture<FirstPgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
