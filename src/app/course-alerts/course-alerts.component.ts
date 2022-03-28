import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Course } from '../courses';

@Component({
  selector: 'app-course-alerts',
  templateUrl: './course-alerts.component.html',
  styleUrls: ['./course-alerts.component.scss']
})
export class CourseAlertsComponent {
  @Input() course: Course | undefined;
  @Output() notify = new EventEmitter();
}
