import { Injectable } from '@angular/core';
import { Course } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Course[] = [];

  addToCart(course: Course) {
    this.items.push(course);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
