import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/model/course';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {
  constructor(private service: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    if (route.params?.['id']) {
      return this.service.findById(route.params['id']);
    }
    return of({ id: '', name: '', category: '' });
  }
}
