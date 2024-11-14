import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular 18',
      },
      {
        id: 2,
        name: 'Java',
      },
    ]
  }

  getCourse(id: number) {
    const courses = this.getCourses();

    return courses.find(course => course.id == id);
  }
}
