import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProjectsComponent } from './story-projects.component';

describe('StoryProjectsComponent', () => {
  let component: StoryProjectsComponent;
  let fixture: ComponentFixture<StoryProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
