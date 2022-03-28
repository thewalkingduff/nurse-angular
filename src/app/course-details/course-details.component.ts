import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course, courses } from '../courses';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  addToCart(course: Course) {
    this.cartService.addToCart(course)
    window.alert('Your course has been added to the cart!')
  }

  course: Course | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit()  {
    const routeParams = this.route.snapshot.paramMap;
    const courseIdFromRoute =
    Number(routeParams.get('courseId'))

    this.course = courses.find(course => course.id === 
      courseIdFromRoute);
  }

  onNotify() {
    window.alert('You will be notified when the course goes on sale!')
  }

}
