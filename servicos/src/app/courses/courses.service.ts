import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from './../shared/log.service';

@Injectable()
export class CoursesService {
  emitterCourseCreate = new EventEmitter<string>();
  static createdNewCourse = new EventEmitter<string>();

  private courses: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'Node.js',
    'C#',
  ];

  constructor(private logService: LogService) {
    console.log('constructing');
  }

  getCourses() {
    this.logService.consoleLog('Getting courses');

    return this.courses;
  }

  addCourse(course: string) {
    this.logService.consoleLog('Adding course');
    this.courses.push(course);

    this.emitterCourseCreate.emit(course);
    CoursesService.createdNewCourse.emit(course);
  }
}
