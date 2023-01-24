import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeMeterComponent } from './knowledge-meter.component';

describe('KnowledgeMeterComponent', () => {
  let component: KnowledgeMeterComponent;
  let fixture: ComponentFixture<KnowledgeMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
