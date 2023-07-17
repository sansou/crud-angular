import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const course: Course = this.router.snapshot.data['course'];
    this.form.setValue({
      id: course.id,
      name: course.name,
      category: course.category
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      res => this.onSucesso('Curso salvo com sucesso'),
      error => this.onError('Falha ao cadastrar o curso')
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSucesso(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
    this.onCancel();
  }
  private onError(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

}
