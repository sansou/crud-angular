import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { id: '1', name: 'Angular', category: 'front-end' }
  ];
  displayedColumns = ['name', 'category'];

  constructor(coursesService: CoursesService) {

  }

  ngOnInit(): void {
  }

}
