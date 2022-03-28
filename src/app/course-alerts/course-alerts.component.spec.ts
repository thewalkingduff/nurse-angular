import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAlertsComponent } from './course-alerts.component';

describe('CourseAlertsComponent', () => {
  let component: CourseAlertsComponent;
  let fixture: ComponentFixture<CourseAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
